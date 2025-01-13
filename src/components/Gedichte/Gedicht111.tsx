import { Link } from 'react-router-dom';

const Gedicht111 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Аргонавты
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Аргонавты</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>За золотым руном<br />
В далёкую Колхиду<br />
Их быстрый мчит «Арго» –<br />
И всё ещё случится!<br />
Медеи помощь, торжество Ясона<br />
и Абсирта гибель.<br />
Но не всем, увы!<br />
победой доведётся насладиться.<br />
На родину назад не все они вернутся!<br />
Кто?<br />
Про то лишь боги ведают бессмертные – не люди!<br />
А потому безмолвствуют герои,<br />
задумчиво глядят на незнакомые созвездья в небе…<br />
И никому не спится.</p>
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

export default Gedicht111;
