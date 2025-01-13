import { Link } from 'react-router-dom';

const Gedicht390 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Мы верим в сказки…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Мы верим в сказки…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Мы верим в сказки<br />
И строим глазки<br />
Року:</p>
<p style={{textAlign: 'center'}}>«Ну что, мол, стоит!..<br />
Да нас устроит!..»<br />
Проку</p>
<p style={{textAlign: 'center'}}>От этих хитростей маловато,<br />
Вот незадача!</p>
<p style={{textAlign: 'center'}}>Но и не подличать страшновато:<br />
А вдруг – удача?!</p>
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

export default Gedicht390;
