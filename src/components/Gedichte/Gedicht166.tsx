import { Link } from 'react-router-dom';

const Gedicht166 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Я видел ад…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Я видел ад…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Я видел ад,<br />
И сам не рад<br />
Тому.</p>
<p style={{textAlign: 'center'}}>Костры, смола…<br />
Исчадий зла<br />
Тем тьму.</p>
<p style={{textAlign: 'center'}}>И воплей гам,<br />
Горящей плоти<br />
Смрад.</p>
<p style={{textAlign: 'center'}}>И – «горе вам!..»,<br />
И нет пути<br />
Назад.</p>
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

export default Gedicht166;
