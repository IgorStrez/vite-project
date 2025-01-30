import React from 'react';
import { Link } from 'react-router-dom';

// Определяем интерфейс для Песни
interface Poem {
  id: number;
  title: string;
}


// Массив песен
const poems: Poem[] = [
    { id: 1, title: "Джек (Вивальди)" },
    { id: 2, title: "Начало (Вивальди)" },
    { id: 3, title: "Игра (Вивальди)" },
    { id: 4, title: 'Цикл песен "Ромео и Джульетта"' },
    { id: 401, title: "Любовь и смерть" },
    { id: 402, title: "Ромео и Джульетта — 1" },
    { id: 403, title: "Ромео и Джульетта — 2" },
    { id: 5, title: "Моцарт, Турецкий марш" },
    { id: 6, title: "Готтшальк, Сувенир из Пуэрто-Рико" },
    { id: 7, title: "Мендельсон, Песня венецианского гондольера" },
    { id: 8, title: "Бах, Музыкальная шутка" },
    { id: 9, title: "Бах, Рондо" },
    { id: 10, title: "Куперен, Рондо" },
    { id: 11, title: "Пёрселл, Рондо" },
    { id: 12, title: "Паганини, Рондо" },
    { id: 13, title: "Бизе, Арлезианка" },
    { id: 14, title: 'Бизе, Прелюдия к опере "Кармен"' },
    { id: 15, title: 'Бизе, Марш Эскамильо из оперы "Кармен"' },
    { id: 16, title: 'Гуно, Куплеты Мефистофеля из оперы "Фауст"' },
    { id: 17, title: "Брамс, Венгерский танец" },
    { id: 18, title: "Свиридов, Вальс" },
    { id: 19, title: "Бетховен, к Элизе" },
    { id: 20, title: 'Огинский, полонез "Прощание с Родиной"' },
    
    { id: 21, title: "Я люблю, я люблю, я люблю, я люблю…" },
    { id: 22, title: "У Геркулесовых столпов…" },
    { id: 23, title: "Чёрный ворон" },
    { id: 24, title: "Поручик Голицын" },
    { id: 25, title: "Господа офицеры…" },
    { id: 26, title: "Нас уже не хватает в шеренгах по восемь…" },

    { id: 27, title: "Песенка про Россию" },
    { id: 28, title: "Песня про распил бюджета." },
    { id: 29, title: "Прикольная песенка банковского вкладчика." },
    { id: 30, title: "Смешная песенка про выборы." },
    { id: 31, title: "Прикольная песенка о ПФР." },
    { id: 32, title: "Жалостливая песенка Васильевой." },
    { id: 33, title: "Песенка Васильевой — 2" },
    { id: 34, title: "Песенка про Ходорковского." },
    { id: 35, title: "Песенка про Навального." },
    { id: 36, title: "Пусси Райот." },
    { id: 37, title: "Майдан." },
    { id: 38, title: "Гимн современной России." },
    { id: 39, title: "Жизнеутверждающая Оптимистичная ПесенкА" },
];


const Lieder: React.FC = () => (
  <div className="breadcrumbs">
    <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → Песни
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
            <h2>Песни</h2>
            <div style={{ backgroundColor: 'rgb(220, 220, 220)', textAlign: 'center' }}>
              <p>&nbsp;</p>
              <div style={{ backgroundColor: 'white', margin: '0 30px' }}>
                <p>&nbsp;</p>
                <div style={{ backgroundColor: 'rgb(243, 243, 243)', margin: '0 20px' }}>
                  {poems.map((poem) => (
                    <div key={poem.id}>
                      <strong>
                        <Link 
                          to={`/lieder/lied${poem.id}`} 
                          className="yellow-underline2" 
                          style={{ fontSize: '20px' }}
                        >
                          {poem.title}
                        </Link>
                      </strong>
                      <div style={{ backgroundColor: 'rgb(255, 255, 255)' }}>&nbsp;</div>
                    </div>
                  ))}
                </div>
                <p>&nbsp;</p>
              </div>
              <p>&nbsp;</p>
            </div>
            <p>&nbsp;</p>
          </div>
        </div>
        <div className="cwc_bot"></div>
      </div>
    </div>
  </div>
);

export default Lieder;
