import { Link } from 'react-router-dom';
import './Contacts.css';
// import Coin from './Coin';

const Contacts = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → Контакты
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
            <h2>КОНТАКТЫ</h2>
            <br /><hr></hr> <br />
            <div style={{ backgroundColor: 'white' }}>
              <p><br />
                Заявления и предложения, поздравления и подарки, жалобы и проклятия - принимаются в адрес:&nbsp;
                <span>
                 <a href="mailto:theatermavrodi@gmail.com" style={{ color: 'rgb(236, 36, 36)', textDecoration: 'none' }}>
                 theatermavrodi@gmail.com</a> 
                </span>
              </p>
              <br/>
              <p>
                Официальный сайт Сергея Мавроди: www.sergey-mavrodi.com<br /><br /><br />
                {/* Магический Магазин Мавроди: www.sergeymavrodi.com<br /><br /> */}
                {/* Международная версия Сайта: www.sergey-mavrodi.ms<br /><br /><br /> */}
                Зеркала сайта Сергея Мавроди:<br /><br />
                www.mavrodi-mmm-2011.com<br /><br />
                www.sergey-mavrodi.ms
                {/* Личные кабинеты Сайта: www.mavrodi-mmm-2011.com<br /><br /> */}
              </p>
              {/* <Coin /> */}
            </div>
            <div style={{ color: 'rgb(0, 0, 0)', fontFamily: 'Times New Roman, Times, serif', fontSize: '16px' }}>
              &nbsp;
            </div>
            <div style={{ color: 'rgb(0, 0, 0)', fontFamily: 'Times New Roman, Times, serif', fontSize: '16px' }}>
              &nbsp;
            </div>
          </div>
        </div>
        <div className="cwc_bot"></div>
      </div>
    </div>
  </div>
);

export default Contacts;
