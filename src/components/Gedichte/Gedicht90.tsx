import { Link } from 'react-router-dom';

const Gedicht90 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Люцифер Светоносец
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Люцифер Светоносец</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Если Он – свет,<br />
Значит, Бог – тьма.<br />
Если «да» – «нет»,<br />
Значит, «нет» – «да».</p>
<p style={{textAlign: 'center'}}>Значит, правда – ложь,<br />
А бурьян – рожь.<br />
Значит, друг – враг.<br />
А иначе – как?</p>
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

export default Gedicht90;
