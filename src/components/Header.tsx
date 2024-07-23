import { Link } from "react-router-dom";
import "./Header.css";


const Header = () => {
  return (
    <div id="header">
      <div className="header_top">
        <div className="search">
          <form id="searchform">
            <input
              name="search_q"
              id="searchInput"
              type="text"
              placeholder="Поиск..."
            />
            <input type="submit" value="НАЙТИ" />
          </form>
        </div>
        <i className="img18"></i>
        <a
          href="http://lk.sergey-mavrodi.com/"
          className="demo_but"
          target="_blank"
          title="Личный кабинет"
        ></a>
      </div>
      <div className="header_bot">
        <div className="header_bot_front">
          <a className="none" href="http://www.sergey-mavrodi.com">
            <h1>Официальный сайт Сергея Мавроди</h1>
          </a>
        </div>
      </div>
      <div className="main_menu">
        <Link to="/news"><button data-type="eins">!НОВОСТИ!</button></Link>
        <a href="https://kinotheater-luzifer.com/" target="_blank">
          <button data-type="zwei">KinoTheater</button>
        </a>
        <a
          href="https://xn----8sbeacmc3a6aqceshilf1g.xn--p1ai/"
          target="_blank"
        >
          <button data-type="drei">ТВОРЧЕСТВО</button>
        </a>
      </div>
      <div id="nal_mavro" className="nal_mavro_wrap">
        <div className="nal_mavro">
          <a
            href="https://sergey-mavrodi.com/bilet/"
            id="nal_mavro_link"
            className="nal_window"
            style={{
              color: "rgb(50, 81, 28)",
              display: "block",
              margin: "-12px 0px -12px -12px",
              padding: "12px",
              textAlign: "center",
              width: "100%",
            }}
          >
            <div className="h">
              Купить театральный Билет! /скоро в продаже/
              <br />
              Увидимся в Зале?))
            </div>
          </a>
        </div>
      </div>
      <div className="banner">
        <a href="/https://sergeymavrodi.com"></a>
      </div>
    </div>
  );
};

export default Header;
