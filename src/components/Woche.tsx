
import React from 'react';
import { Link } from 'react-router-dom';

// Определяем интерфейс для Газеты
interface Poem {
  id: number;
  title: string;
}


// Массив газет
const poems: Poem[] = [
    { id: 1, title: "Неделька. Еженедельная газетка. №1" },
    { id: 2, title: "Неделька. Еженедельная газетка. №2" },
    { id: 3, title: "Неделька. Еженедельная газетка. №3" },
    { id: 4, title: "Неделька. Еженедельная газетка. №4" },
    { id: 5, title: "Неделька. Еженедельная газетка. №5" },
    { id: 6, title: "Неделька. Еженедельная газетка. №6" },
    { id: 7, title: "Неделька. Еженедельная газетка. №7" },
    { id: 8, title: "Неделька. Еженедельная газетка. №8" },
    { id: 9, title: "Неделька. Еженедельная газетка. №9" },
    { id: 10, title: "Неделька. Еженедельная газетка. №10" },
    { id: 11, title: "Неделька. Еженедельная газетка. №11" },
    { id: 12, title: "Неделька. Еженедельная газетка. №12" },
    { id: 13, title: "Неделька. Еженедельная газетка. №13" },
    { id: 14, title: "Неделька. Еженедельная газетка. №14" },
    { id: 15, title: "Неделька. Еженедельная газетка. №15" },
    { id: 16, title: "Неделька. Еженедельная газетка. №16" },
    { id: 17, title: "Неделька. Еженедельная газетка. №17" },
    { id: 18, title: "Неделька. Еженедельная газетка. №18" },
    { id: 19, title: "Неделька. Еженедельная газетка. №19" },
    { id: 20, title: "Неделька. Еженедельная газетка. №20" },
    { id: 21, title: "Неделька. Еженедельная газетка. №21" },
    { id: 22, title: "Неделька. Еженедельная газетка. №22" },
    { id: 23, title: "Неделька. Еженедельная газетка. №23" },
    { id: 24, title: "Неделька. Еженедельная газетка. №24" },
    { id: 25, title: "Неделька. Еженедельная газетка. №25" },
    { id: 26, title: "Неделька. Еженедельная газетка. №26" },
    { id: 27, title: "Неделька. Еженедельная газетка. №27" },
    { id: 28, title: "Неделька. Еженедельная газетка. №28" },
    { id: 29, title: "Неделька. Еженедельная газетка. №29" },
    { id: 30, title: "Неделька. Еженедельная газетка. №30" },
    { id: 31, title: "Неделька. Еженедельная газетка. №31" },
    { id: 32, title: "Неделька. Еженедельная газетка. №32" },
    { id: 33, title: "Неделька. Еженедельная газетка. №33" },
    { id: 34, title: "Неделька. Еженедельная газетка. №34" },
    { id: 35, title: "Неделька. Еженедельная газетка. №35" },
    { id: 36, title: "Неделька. Еженедельная газетка. №36" },
    { id: 37, title: "Журнал (Сатира и юмор)" },
    { id: 38, title: "Журнал (Переделка песен)" },
    
   
];


const Woche: React.FC = () => (
  <div className="breadcrumbs">
    <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → Неделька
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
            <h2>Неделька</h2>
            <div style={{ backgroundColor: 'rgb(220, 220, 220)', textAlign: 'center' }}>
              <p>&nbsp;</p>
              <div style={{ backgroundColor: 'white', margin: '0 30px' }}>
                <p>&nbsp;</p>
                <div style={{ backgroundColor: 'rgb(243, 243, 243)', margin: '0 20px' }}>
                  {poems.map((poem) => (
                    <div key={poem.id}>
                      <strong>
                        <Link 
                          to={`/woche/zeitung${poem.id}`} 
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

export default Woche;
