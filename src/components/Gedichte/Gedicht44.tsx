import { Link } from 'react-router-dom';

const Gedicht44 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Ей
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Ей</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Мы опять розно<br />
Прошли по свету.<br />
Сожалеть – поздно.<br />
Эту,.. ту,.. эту…</p>
<p style={{textAlign: 'center'}}>Я ломал судьбы –<br />
Всё не то!.. Ну же!..<br />
Отдохнуть чуть бы.<br />
Может быть, хуже,..</p>
<p style={{textAlign: 'center'}}>А не то – лучше…<br />
Но не так всё же!!<br />
Иль ещё жутче?<br />
А?.. Ответь, Боже?</p>
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

export default Gedicht44;
