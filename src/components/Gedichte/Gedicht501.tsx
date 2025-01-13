import { Link } from 'react-router-dom';

const Gedicht501 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Из цикла Тюрьма, Автозэки, автозэки!..
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Из цикла Тюрьма, <br />Автозэки, автозэки!..</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Автозэки, автозэки!<br />
Горя – море, боли – реки!<br />
В ваших клетках и стаканах<br />
Судьбы – в ранах.</p>
<p style={{textAlign: 'center'}}>Прокуроры, прокуроры!<br />
Приговоры, приговоры!<br />
Годы, годы, годы, годы<br />
Несвободы.</p>
<p style={{textAlign: 'center'}}>Зоны, зоны, зоны, зоны!<br />
Спецэтапы, эшелоны,<br />
Пересылки да бараки,<br />
Шмоны, драки!</p>
<p style={{textAlign: 'center'}}>Это – близко, это – рядом!<br />
За «бригадой», за «отрядом» –<br />
Люди, люди! а не «зэки».<br />
Боли – реки!</p>
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

export default Gedicht501;
