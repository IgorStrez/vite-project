import { Link } from 'react-router-dom';

const Gedicht187 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Пиковая дама
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Пиковая дама</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Мы ещё распрямимся,<br />
И снова сразимся,<br />
И заплещут штандарты!</p>
<p style={{textAlign: 'center'}}>И враги затрепещут,<br />
И доспехи заблещут,<br />
И – выпадут карты.</p>
<p style={{textAlign: 'center'}}>Туз, семёрка и тройка.<br />
“Карта бита!” Но только?..<br />
Но откуда же дама!?..</p>
<p style={{textAlign: 'center'}}>И – усмешка графини.<br />
И – проклятые вини!<br />
И – вечная драма.</p>
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

export default Gedicht187;
