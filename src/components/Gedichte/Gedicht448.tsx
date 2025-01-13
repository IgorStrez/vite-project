import { Link } from 'react-router-dom';

const Gedicht448 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Сплошные тучи…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Сплошные тучи…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Сплошные тучи,<br />
Сплошные кручи,<br />
Сплошные битвы!</p>
<p style={{textAlign: 'center'}}>Душа – устала,<br />
Уж всё достало!<br />
И все молитвы –</p>
<p style={{textAlign: 'center'}}>О передышке!<br />
Лишь понаслышке<br />
Я о которой.</p>
<p style={{textAlign: 'center'}}>Ужель бывает?<br />
Судьба зевает:<br />
«Какой ты скорый!..»</p>
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

export default Gedicht448;
