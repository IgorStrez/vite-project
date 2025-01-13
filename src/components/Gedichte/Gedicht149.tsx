import { Link } from 'react-router-dom';

const Gedicht149 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Проклятие творчества
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Проклятие творчества</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Где-то жизнь течёт,<br />
Брызжет и бурлит!<br />
И туда – влечёт,<br />
Тянет и манит.<br />
В омут – головой!<br />
Э-ех!.. Да однова!!..</p>
<p style={{textAlign: 'center'}}>Холод. Ветра вой.<br />
Да слова, слова…</p>
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

export default Gedicht149;
