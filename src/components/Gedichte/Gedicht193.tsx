import { Link } from 'react-router-dom';

const Gedicht193 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Текут слёзы…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Текут слёзы…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Текут слёзы,<br />
И в них грёзы<br />
Тонут.</p>
<p style={{textAlign: 'center'}}>Беззвучно, тихо…<br />
Хотя ведь Лихо<br />
Не тронут</p>
<p style={{textAlign: 'center'}}>Мольбы, вопли,<br />
Любви сопли<br />
И стоны.</p>
<p style={{textAlign: 'center'}}>По барабану!<br />
«Ах, соль на рану?..<br />
Да тонны!»</p>
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

export default Gedicht193;
