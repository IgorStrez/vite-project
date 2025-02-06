import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";


const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_q");
  const [results, setResults] = useState<{ url: string; pageTitle: string }[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    setLoading(true);
    fetch(`https://sergey-mavrodi.com/api/search?query=${encodeURIComponent(query)}`)
    .then((res) => res.json())
      .then((data) => {
        // ✅ Фильтруем пустые заголовки перед сохранением
        setResults(data.filter((item: { pageTitle: string }) => item.pageTitle));
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Ошибка при получении данных:", err);
        setLoading(false);
      });
  }, [query]);

  return (
     <div className="breadcrumbs">
         <div className="breadcrumbs">
           <div id="breadcrumb">
           </div>
         </div>
         <div className="content">
           <div className="content_white_cloud">
             <div className="cwc_top"></div>
             <div className="cwc_mid">
               <div className="content">
                 <h2>ПОИСК</h2>
                 <div style={{ backgroundColor: 'white' }}>

      <br /><br />

      {query ? (
        <>
          <p style={{ fontSize: "20px", fontWeight: "bold", color: "#333" }}>Ваш текущий запрос: {query}</p>

          <br /><hr></hr> <br />
          </>
      ) : (
        <p>Введите запрос в поле поиска.</p>
      )}

      {loading && <p>Поиск...</p>}

      {results.length > 0 ? (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {results.map((item, index) => (
            <li key={index} style={{ marginBottom: "13px" }}>
              <a href={item.url} style={{ fontSize: "17px", fontWeight: "bold", textDecoration: "none", color: "#333" }}>
                {item.pageTitle}
              </a>
              <br />
            </li>
          ))}
        </ul>
      ) : (
        <p>❌ Ничего не найдено.</p>
      )}
    </div>
            <div style={{ color: 'rgb(0, 0, 0)', fontFamily: 'Times New Roman, Times, serif', fontSize: '16px' }}>
        
            </div>
            <div style={{ color: 'rgb(0, 0, 0)', fontFamily: 'Times New Roman, Times, serif', fontSize: '16px' }}>
        
            </div>
          </div>
        </div>
        <div className="cwc_bot"></div>
      </div>
    </div>
  </div>
  );
};

export default SearchResults;
