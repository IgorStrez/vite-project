import { Link } from 'react-router-dom';

const Gedicht256 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Ах, карты масть!..
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Ах, карты масть!..</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Ах, карты масть!<br />
Азарта власть –<br />
Сплошные драмы.</p>
<p style={{textAlign: 'center'}}>Вся жизнь – игра.<br />
Все – шулера.<br />
Вальты и дамы.</p>
<p style={{textAlign: 'center'}}>Один обман,<br />
Один канкан –<br />
Отвлечь вниманье…</p>
<p style={{textAlign: 'center'}}>Чуть зазевался – сразу, хлоп!<br />
«Плати по счёту, остолоп».<br />
И – до свиданья!</p>
		</div>

              </div>
            </div>
           
          </div>
        </div>
        <div className="cwc_bot"></div>
      </div>
    </div>
  </div>
);

export default Gedicht256;
