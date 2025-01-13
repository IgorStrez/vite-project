import { Link } from 'react-router-dom';

const Gedicht109 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Клио
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Клио</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Пылает Илион. Неистовство Ахилла.<br />
Юных дев и жён рыданье.<br />
Крушение эпохи.</p>
<p style={{textAlign: 'center'}}>Всё это повторится. Гунн Атилла.<br />
Рима позднего позор и увяданье.<br />
А раньше – диадохи.</p>
<p style={{textAlign: 'center'}}>Свершает круг история, и ничего не ново:<br />
Империй гибель, царств завоеванье…<br />
И Рим в руинах, и Атилла снова.<br />
И дев рыданье.</p>
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

export default Gedicht109;
