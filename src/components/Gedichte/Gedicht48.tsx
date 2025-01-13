import { Link } from 'react-router-dom';

const Gedicht48 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Искушения грёзы…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Искушения грёзы…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Искушения грёзы<br />
Словно дразнят, кривляясь.<br />
И – безволия слёзы!<br />
Обвиваясь, свиваясь,</p>
<p style={{textAlign: 'center'}}>Снежным вихрем! Как змейки!<br />
Соблазны! Соблазны!<br />
И – рыданья жалейки.<br />
А в душе – «бесы разны».</p>
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

export default Gedicht48;
