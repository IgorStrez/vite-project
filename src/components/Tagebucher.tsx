

import { Link } from 'react-router-dom';
import "./Tagebucher.css";

const Tagebucher = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → Дневники Сына Люцифера
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
            <h2>Дневники Сына Люцифера</h2>
           
           
            <div style={{ backgroundColor: 'rgb(220, 220, 220)', textAlign: 'center' }}>
            <p>&nbsp;</p>
            <div style={{ backgroundColor: 'white', marginLeft: '30px', marginRight: '30px' }}>

            <p style={{ margin: '0 0 0 0' }}>&nbsp;</p>

<div style={{ backgroundColor: 'rgb(243, 243, 243)', marginLeft: '20px', marginRight: '20px' }}>

<strong><Link to="/tagebucher/tagebuch1" className="yellow-underline2" style={{ fontSize: '20px' }}>Комментарии к Библии, Сирах</Link></strong>

<div style={{ backgroundColor: 'rgb(255, 255, 255)', }}>&nbsp;</div>
<strong><Link to="/tagebucher/tagebuch2" className="yellow-underline2" style={{ fontSize: '20px' }}>Комментарии к Библии, Екклесиаст</Link></strong>

<div style={{ backgroundColor: 'rgb(255, 255, 255)', }}>&nbsp;</div>
<strong><Link to="/tagebucher/tagebuch3" className="yellow-underline2" style={{ fontSize: '20px' }}>Комментарии к Библии, Книга притчей Соломона</Link></strong>

<div style={{ backgroundColor: 'rgb(255, 255, 255)', }}>&nbsp;</div>
<strong><Link to="/tagebucher/tagebuch4" className="yellow-underline2" style={{ fontSize: '20px' }}>Комментарии к Библии. Книга Иова</Link></strong>

<div style={{ backgroundColor: 'rgb(255, 255, 255)', }}>&nbsp;</div>
<strong><Link to="/tagebucher/tagebuch5" className="yellow-underline2" style={{ fontSize: '20px' }}>Комментарии к Библии. Апокалипсис</Link></strong>



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

export default Tagebucher;
