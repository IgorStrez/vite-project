import { Link } from "react-router-dom";
import "./Header.css";
import SearchButton from "./SearchButton";
import { useAuth0 } from "@auth0/auth0-react"; // Импортируем хук из Auth0

const Header = () => {

  // const { isAuthenticated, loginWithRedirect } = useAuth0(); // Хуки для авторизации
  const { isAuthenticated } = useAuth0(); // Проверяем, авторизован ли пользователь


  return (
    <div id="header">
      <div className="header_top">
      <SearchButton />
        <i className="img18"></i>

        {/* Обновлённая кнопка "Личный кабинет" */}
        {/* <a
  href={isAuthenticated ? "/lk" : undefined}
  className="demo_but"
  title={isAuthenticated ? "Перейти в Личный кабинет" : "Войти в Личный кабинет"}
  onClick={(e) => {
    if (!isAuthenticated) {
      e.preventDefault(); // Останавливаем переход
      loginWithRedirect(); // Перенаправляем на вход
    }
  }}
>
</a> */}

      </div>
      <div className="header_bot">
        <div className="header_bot_front">
          <a className="none" href="http://www.sergey-mavrodi.com">
            <h1>Официальный сайт Сергея Мавроди</h1>
          </a>
        </div>
      </div>
      <div className="main_menu">
        <a href="https://kinotheater-luzifer.com/" target="_blank">
          <button data-type="zwei">KinoTheater</button>
        </a>
        <Link to="/news"><button data-type="eins">!НОВОСТИ!</button></Link>
        <Link to="/schriftstellerei"><button data-type="drei">ТВОРЧЕСТВО</button></Link>
      </div>

      {/* <Link to="/ideology" className="ideology" title="Идеология"></Link> */}

      {/* <div id="nal_mavro" className="nal_mavro_wrap">
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
      </div> */}

      {/* <div className="banner">
        <a href="/https://sergeymavrodi.com"></a>
      </div> */}

{isAuthenticated && (
        <div className="info_wnd">
          <div>
            <b>Зеркала:</b>{" "}
            <a href="http://www.sergey-mavrodi.ms/">
              sergey-mavrodi.ms
            </a>{" "}
            и{" "}
            <a href="http://www.mavrodi-mmm-2011.com/">
              mavrodi-mmm-2011.com
            </a>
          </div>
          <b>ПОМНИТЕ!</b> Проблемы с сайтом или с ЛК никак не влияют на работу
          самой Системы. Это всего лишь обычные технические сбои <br/>и не более
          того. Всё наладится! :-))
        </div>
      )}

    </div>
    
  );
};

export default Header;
