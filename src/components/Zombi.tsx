

import { Link } from 'react-router-dom';


const Zombi = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/kinotheater">KinoTheater LUZIFER</Link> → ZОМБИ
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
            <h2>ZОМБИ</h2>
           
           
            <div style={{ backgroundColor: 'rgb(220, 220, 220)', textAlign: 'center' }}>
            <p>&nbsp;</p>
            <div style={{ backgroundColor: 'white', marginLeft: '30px', marginRight: '30px' }}>

            <p style={{ margin: '0 0 0 0' }}>&nbsp;</p>

<div style={{ backgroundColor: 'rgb(243, 243, 243)', marginLeft: '20px', marginRight: '20px' }}>

<strong><Link to="/kinotheater/zombi/zombi1" className="yellow-underline2" style={{ fontSize: '20px' }}>Zомби</Link></strong>

<div style={{ backgroundColor: 'rgb(255, 255, 255)', }}>&nbsp;</div>
<strong><Link to="/kinotheater/zombi/zombi2" className="yellow-underline2" style={{ fontSize: '20px' }}>Чёртик</Link></strong>

<div style={{ backgroundColor: 'rgb(255, 255, 255)', }}>&nbsp;</div>
<strong><Link to="/kinotheater/zombi/zombi3" className="yellow-underline2" style={{ fontSize: '20px' }}>Антимир</Link></strong>



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

export default Zombi;
