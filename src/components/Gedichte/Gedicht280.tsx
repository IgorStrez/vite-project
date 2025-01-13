import { Link } from 'react-router-dom';

const Gedicht280 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Я прошёл через ад…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Я прошёл через ад…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Я прошёл через ад.<br />
И вернулся назад?<br />
Нет.</p>
<p style={{textAlign: 'center'}}>Даже если – сумел!<br />
Достонал, дохрипел!!..<br />
Бред!</p>
<p style={{textAlign: 'center'}}>Это только мара,<br />
Это только игра,<br />
Ложь.</p>
<p style={{textAlign: 'center'}}>Чтоб поверил – мол, да!..<br />
И вот тут-то беда:<br />
«Врёшь!»</p>
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

export default Gedicht280;
