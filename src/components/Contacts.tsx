import { Link } from 'react-router-dom';
import './Contacts.css';

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
            <div style={{ backgroundColor: 'white' }}>
              <p><br /><br /><br />
                Заявления и предложения, поздравления и подарки, жалобы и проклятия - принимаются в адрес:
                <span style={{ color: 'rgb(236, 36, 36)' }}> theatermavrodi@gmail.com</span>
              </p>

              <p>&nbsp;</p>
              <p>
                Официальный сайт Сергея Мавроди: www.sergey-mavrodi.com<br /><br />
                KinoTheater "LUZIFER" (online): www.kinotheater-luzifer.com<br /><br />
                {/* Магический Магазин Мавроди: www.sergeymavrodi.com<br /><br /> */}
                {/* Международная версия Сайта: www.sergey-mavrodi.ms<br /><br /><br /> */}
                {/* Генерация Искуственного Интелекта: www.kinotheater.de<br /><br /> */}
                Творчество Сергея Мавроди: творчество-мавроди.рф<br /><br /><br />
                {/* Зеркало от Сайта: www.luzifer.ru<br /><br /> */}
                {/* Личные кабинеты Сайта: www.mavrodi-mmm-2011.com<br /><br /> */}
                {/* АудиоКнига (от Простого Человека): sites.google.com/site/sergejmavrodisynlucifera<br /><br /> */}
              </p>
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
