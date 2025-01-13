import { Link } from 'react-router-dom';

const Gedicht251 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Мы когда-то встречались…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Мы когда-то встречались…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Мы когда-то встречались,..<br />
Ну, а после расстались<br />
На годы.</p>
<p style={{textAlign: 'center'}}>Мы когда-то – любили…<br />
Ну, а после – забыли.<br />
Невзгоды,</p>
<p style={{textAlign: 'center'}}>Неудачи-успехи<br />
И утехи-потехи –<br />
Всё бывало!</p>
<p style={{textAlign: 'center'}}>А осталась – лишь дымка.<br />
Да на память три снимка.<br />
Мало!</p>
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

export default Gedicht251;
