import { Link } from 'react-router-dom';

const Gedicht512 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Из цикла Тюрьма, Огни Матроски!..
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Из цикла Тюрьма, <br />Огни Матроски!..</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Огни Матроски!..<br />
Души обноски,<br />
Судьбы обрывки.</p>
<p style={{textAlign: 'center'}}>Общак да шмоны,<br />
Воров прогоны<br />
Да сна урывки.</p>
<p style={{textAlign: 'center'}}>Рамсы, разборки…<br />
И жизнь – до корки,<br />
До дыр!! О боже!</p>
<p style={{textAlign: 'center'}}>Спаси, помилуй!<br />
Но – поздно, милый!<br />
Теперь уж что же!..</p>
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

export default Gedicht512;
