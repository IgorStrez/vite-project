import { Link } from 'react-router-dom';

const Gedicht400 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Мы живём в суете…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Мы живём в суете…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Мы живём в суете,<br />
И насущных забот –<br />
Полон рот.</p>
<p style={{textAlign: 'center'}}>В колготне, маете,..<br />
Городим огород!..<br />
Только вот,</p>
<p style={{textAlign: 'center'}}>Как очнёшься порой,<br />
И со смертной тоской<br />
Кинешь взор</p>
<p style={{textAlign: 'center'}}>На прошедшего прах,<br />
На грядущего страх,<br />
Будней – вздор!</p>
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

export default Gedicht400;
