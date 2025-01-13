import { Link } from 'react-router-dom';

const Gedicht70 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Когда-нибудь, но встанет рассвет…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Когда-нибудь, но встанет рассвет…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Когда-нибудь, но встанет рассвет,<br />
Проснётся мир – а меня уже нет.<br />
Где я?</p>
<p style={{textAlign: 'center'}}>И – содрогнётся земная твердь,<br />
И завопит в ужасе смерть:<br />
«Это не я!!!»</p>
<p style={{textAlign: 'center'}}>Но нет, сюда я уже не вернусь!<br />
Я в этот миг, наверно, очнусь –<br />
На Тау-Кита.</p>
<p style={{textAlign: 'center'}}>Там феи порхают, как мотыльки;<br />
Печали светлы и беды легки.<br />
Там ты – та!</p>
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

export default Gedicht70;
