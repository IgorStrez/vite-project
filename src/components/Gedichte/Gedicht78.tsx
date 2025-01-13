import { Link } from 'react-router-dom';

const Gedicht78 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Я убегал в никуда…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Я убегал в никуда…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Я убегал в никуда,<br />
Но догоняла беда<br />
Всегда.</p>
<p style={{textAlign: 'center'}}>И находила – везде!<br />
И – по следам на воде,<br />
Когда</p>
<p style={{textAlign: 'center'}}>Казалось – уж, ну, теперь!..<br />
Но открывалася дверь…<br />
Невзначай,..</p>
<p style={{textAlign: 'center'}}>Словно бы сквознячок…<br />
«Ну, привет, дурачок!<br />
Встречай!»</p>
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

export default Gedicht78;
