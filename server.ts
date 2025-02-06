import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";
import cors from "cors";

const app = express();
app.use(cors()); 
const PORT = 3001;

const TEXTS_DIR = path.join(process.cwd(), "src", "components");

// 🔥 Кэш файлов
const fileCache: Record<string, { content: string; pageTitle: string }> = {};

// 📌 Разрешённые папки
const ALLOWED_DIRS = new Set([
  "Drehbuch",
  "Gedichte",
  "Gefangnis",
  "Lieder",
  "SohnLuzifers",
  "Tagebucher",
  "Woche",
]);

// 📂 Асинхронная загрузка файлов в память
async function loadFiles(dir: string): Promise<void> {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const filePath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (ALLOWED_DIRS.has(entry.name)) {
        await loadFiles(filePath);
      }
    } else if (entry.name.endsWith(".tsx") && ALLOWED_DIRS.has(path.basename(dir))) {
      try {
        const content = await fs.promises.readFile(filePath, "utf8");
        const pageTitle = extractPageTitle(content);

        if (pageTitle !== null) {  // ✅ Проверяем, что pageTitle не null
          fileCache[filePath] = { content, pageTitle };
        }
      } catch (err) {
        console.error(`❌ Ошибка чтения файла: ${filePath}`, err);
      }
    }
  }
}

// 🚀 Загружаем файлы при запуске
loadFiles(TEXTS_DIR);
console.log("📂 Загруженные файлы:", Object.keys(fileCache));

interface SearchResult {
  url: string;
  pageTitle: string;
}

function searchInCache(query: string): SearchResult[] {
  if (!/^[а-яё0-9\s!?,.\-—…:;()[\]*+=–]+$/i.test(query)) {
    return []; // ❌ Игнорируем запросы с недопустимыми символами
  }

  const regex = new RegExp(query.replace(/\s+/g, "\\s+"), "i"); // ✅ Позволяем пробелам "сливаться"

  return Object.entries(fileCache)
    .filter(([, { content }]) => {
      // ✅ Вырезаем текст между </h2> и <div className="cwc_bot">
      const match = content.match(/<\/h2>(.*?)<div className="cwc_bot">/s);
      if (!match) return false; // ❌ Если нужного блока нет, пропускаем

      const cleanContent = match[1] // Берём только текст внутри
        .replace(/<br\s*\/?>|\n|<\/?p>/g, " ") // Убираем <br>, <p>, </p>, \n
        .replace(/\s+/g, " ") // Лишние пробелы заменяем на один

      return regex.test(cleanContent);
    })
    .map(([filePath, { pageTitle }]) => {
      const relativePath = path.relative(TEXTS_DIR, filePath);
      const cleanPath = relativePath.replace(/\\/g, "/").replace(/\.tsx$/, "");
      const url = `/${cleanPath}`;

      return { url, pageTitle };
    });
}





// 🔎 Извлекаем название страницы (после последней "→" в <Link>)
function extractPageTitle(content: string): string | null {
  // Разбиваем строку по " → ", чтобы получить все части пути
  const parts = content.split(" → ").map(part => part.trim());

  // Берём последний элемент (он и есть нужный заголовок)
  let title: string | null = parts.length ? parts[parts.length - 1] : null;

  if (!title) return null;  // ✅ Если заголовка нет — возвращаем null

  // Обрезаем текст на первом <div>
  title = title.split("<div")[0].trim();

  // Удаляем все лишние </div> в конце строки
  title = title.replace(/<\/div>\s*$/g, "").trim();
  title = title.replace(/<\/div>\s*$/g, "").trim();

  // Если в тексте есть слова, похожие на код, просто игнорируем его
  const forbiddenPatterns = ["const ", "function ", "return ", "=>", "class "];
  if (forbiddenPatterns.some(pattern => title.includes(pattern))) {
    return null; // ✅ Пропускаем, если заголовок похож на код
  }

  return title;
}

// 🖥 API-роут поиска
app.get("/search", async (req: Request, res: Response): Promise<void> => {
  try {
    const { q } = req.query;
    if (!q || typeof q !== "string") {
      res.status(400).json({ error: "Missing or invalid query" });
      return;
    }

    console.log(`🔎 Поиск: "${q}"`);
    const results = searchInCache(q);
    console.log(`✅ Найдено: ${results.length} совпадений`);

    res.json(results);
  } catch (error) {
    console.error("❌ Ошибка поиска:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// 🚀 Запуск сервера
app.listen(3001, '0.0.0.0', () => console.log(`🚀 Server running on http://localhost:${PORT}`));
