import { Link } from 'react-router-dom';

const Gedicht484 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Стихи не пишутся…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Стихи не пишутся…</h2>
                <br />
                <br />
                

                <div className="entry-content">
            <p style={{textAlign: 'center'}}>Стихи не «пишутся»,<br/>
Они – рождаются.<br/>
Они – как дышатся.<br/>
Они – слагаются.</p>
<p style={{textAlign: 'center'}}>Душа кричит от боли<br/>
И от муки!!<br/>
И вот тогда-то!.. поневоле!<br/>
Эти – звуки.</p>
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

export default Gedicht484;
