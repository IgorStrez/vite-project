import { Link } from 'react-router-dom';

const Gedicht42 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Я уйду в никуда на рассвете…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Я уйду в никуда на рассвете…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Я уйду в никуда на рассвете,<br />
А вернусь ли, не знаю точно я.<br />
Ты одна была вчера на свете!<br />
Только всё ведь это – полуночное.<br />
Полусонное, полубредовое –<br />
Поутру растает-расплещется.<br />
Позабудется, поменяется на новое;<br />
И не вспомнится, и не примерещится.</p>
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

export default Gedicht42;
