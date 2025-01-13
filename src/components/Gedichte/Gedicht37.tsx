import { Link } from 'react-router-dom';

const Gedicht37 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Ты вспоминаешься порою…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Ты вспоминаешься порою…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Ты вспоминаешься порою,<br />
Хотя уж смутно и туманно.<br />
Но что казалося игрою,<br />
То оказалося – так странно! –</p>
<p style={{textAlign: 'center'}}>Той самой, первой и последней!<br />
После которой – лишь пустыни.<br />
Моей единственной обедней<br />
Моей единственной святыни.</p>
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

export default Gedicht37;
