import { Link } from 'react-router-dom';

const Gedicht304 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Где друзья?..
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Где друзья?..</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Где друзья?<br />
Ну, хоть один?<br />
Кто – в князья,<br />
А кто в годин<br />
Лихолетья круговерть<br />
Просто струсил и сбежал.<br />
А кого – прибрала смерть…</p>
<p style={{textAlign: 'center'}}>Ну, а тем, кто избежал<br />
Этих чудищ: сцилл, харибд –<br />
Денег, подлости, могил…<br />
Нет, конечно, без обид! –<br />
Жёны. Дети. Топь. Да ил.</p>
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

export default Gedicht304;
