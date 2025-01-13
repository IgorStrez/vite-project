import { Link } from 'react-router-dom';

const Gedicht54 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Позади лишь долги…

      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Позади лишь долги…
                </h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Позади лишь долги,<br />
Впереди же – ни зги.<br />
Подожди!</p>
<p style={{textAlign: 'center'}}>Не спеши, не бросай!<br />
И судьбу не кромсай.<br />
Ведь дожди</p>
<p style={{textAlign: 'center'}}>Смоют всё навсегда;<br />
И устанет беда,<br />
И уйдёт.</p>
<p style={{textAlign: 'center'}}>И настанет покой.<br />
Потерпи лишь, постой!<br />
Всё пройдёт.</p>
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

export default Gedicht54;
