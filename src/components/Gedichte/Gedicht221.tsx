import { Link } from 'react-router-dom';

const Gedicht221 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Плачет дождик за окном…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Плачет дождик за окном…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Плачет дождик за окном,<br />
Светит лампа над столом.<br />
Дни сливаются в года<br />
И уходят в никуда<br />
Навсегда.</p>
<p style={{textAlign: 'center'}}>Ничего на свете нет!<br />
Горе – бред, и счастье – бред.<br />
Только лампы ровный свет;<br />
Только крови красный цвет;<br />
То ли рано, то ли нет…</p>
<p style={{textAlign: 'center'}}>Я не знаю ни черта!<br />
Где последняя черта?<br />
За которой пустота.<br />
Эта?.. Та?..</p>
<p style={{textAlign: 'center'}}>Шепчет ветер: подожди!<br />
Но ведь грустно позади;<br />
Но всё пусто впереди;<br />
Но дожди, дожди, дожди…</p>
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

export default Gedicht221;
