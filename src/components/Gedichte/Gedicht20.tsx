import { Link } from 'react-router-dom';

const Gedicht20 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → И до сих пор в душе твой свет…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>И до сих пор в душе твой свет…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>И до сих пор в душе твой свет.<br />
И пусть тебя давно уж нет;<br />
А та, что есть, давно не ты –<br />
Не те глаза, не те черты…<br />
Мечты<br />
Остались. Прошлого привет<br />
Сияет тихо сквозь года.<br />
Звезда,<br />
Давно умершая, так светит нам с небес<br />
Сквозь бездну лет<br />
Всегда!<br />
Свет – не исчез.</p>
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

export default Gedicht20;
