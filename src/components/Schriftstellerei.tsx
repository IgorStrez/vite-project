import { Link } from 'react-router-dom';
import "./Schriftstellerei.css";

const Schriftstellerei = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → Творчество
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
            <h2>ТВОРЧЕСТВО</h2>
           
           
            <div style={{ backgroundColor: 'rgb(220, 220, 220)', textAlign: 'center' }}>
            <p>&nbsp;</p>
            <div style={{ backgroundColor: 'white', marginLeft: '30px', marginRight: '30px' }}>

            <p style={{ margin: '0 0 0 0' }}>&nbsp;</p>

<div style={{ backgroundColor: 'rgb(243, 243, 243)', marginLeft: '20px', marginRight: '20px' }}>

<strong><Link to="/gedichte" className="yellow-underline" style={{ fontSize: '33px' }}>Мои стихи</Link></strong>

<div style={{ backgroundColor: 'rgb(255, 255, 255)', }}>&nbsp;</div>
<strong><Link to="/sohnluzifers" className="yellow-underline" style={{ fontSize: '33px' }}>Сын Люцифера</Link></strong>

<div style={{ backgroundColor: 'rgb(255, 255, 255)', }}>&nbsp;</div>
<strong><Link to="/tagebucher" className="yellow-underline" style={{ fontSize: '33px' }}>Дневники Сына Люцифера</Link></strong>

{/* <div style={{ backgroundColor: 'rgb(255, 255, 255)', }}>&nbsp;</div>
<strong><Link to="/drehbuch" className="yellow-underline" style={{ fontSize: '33px' }}>Киносценарии</Link></strong> */}



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

export default Schriftstellerei;
