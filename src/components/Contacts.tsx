import { Link } from 'react-router-dom';
import Coin from './Coin'; 
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
            <br /><hr></hr> <br />
            <div style={{ backgroundColor: 'white' }}>
              
              {/* МОНЕТКА */}
              <Coin />

            </div>
            <div style={{ color: 'rgb(0, 0, 0)', fontFamily: 'Times New Roman, Times, serif', fontSize: '16px' }}>
              <br/>
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

export default Contacts;
