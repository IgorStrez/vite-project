import { Link } from 'react-router-dom';

const Gedicht434 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Всё вьюжит и вьюжит…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Всё вьюжит и вьюжит…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Всё вьюжит и вьюжит,<br />
Всё кружит и кружит<br />
Позёмка</p>
<p style={{textAlign: 'center'}}>Невзгод да несчастий,<br />
Печалей-напастей.<br />
Тесёмка –</p>
<p style={{textAlign: 'center'}}>Всё туже и туже.<br />
И уже и уже<br />
Дорожка</p>
<p style={{textAlign: 'center'}}>Последняя, верно.<br />
Осталось, наверно,<br />
Немножко…</p>
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

export default Gedicht434;
