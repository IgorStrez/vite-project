

import { Link } from 'react-router-dom';


const Drehbuch = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → Киносценарии
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
            <h2>Киносценарии</h2>
           
           
            <div style={{ backgroundColor: 'rgb(220, 220, 220)', textAlign: 'center' }}>
            <p>&nbsp;</p>
            <div style={{ backgroundColor: 'white', marginLeft: '30px', marginRight: '30px' }}>

            <p style={{ margin: '0 0 0 0' }}>&nbsp;</p>

<div style={{ backgroundColor: 'rgb(243, 243, 243)', marginLeft: '20px', marginRight: '20px' }}>

<strong><Link to="/drehbuch/szenarium1" className="yellow-underline2" style={{ fontSize: '20px' }}>РЕКА (ужас)</Link></strong>

<div style={{ backgroundColor: 'rgb(255, 255, 255)', }}>&nbsp;</div>
<strong><Link to="/drehbuch/szenarium2" className="yellow-underline2" style={{ fontSize: '20px' }}>СКАЗКА (комедия)</Link></strong>

<div style={{ backgroundColor: 'rgb(255, 255, 255)', }}>&nbsp;</div>
<strong><Link to="/drehbuch/szenarium3" className="yellow-underline2" style={{ fontSize: '20px' }}>КАЗАНОВА (комедия)</Link></strong>

<div style={{ backgroundColor: 'rgb(255, 255, 255)', }}>&nbsp;</div>
<strong><Link to="/drehbuch/szenarium4" className="yellow-underline2" style={{ fontSize: '20px' }}>ГРУППИРОВКА (боевик)</Link></strong>

<div style={{ backgroundColor: 'rgb(255, 255, 255)', }}>&nbsp;</div>
<strong><Link to="/drehbuch/szenarium5" className="yellow-underline2" style={{ fontSize: '20px' }}>СТРЕЛОК (боевик)</Link></strong>



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

export default Drehbuch;
