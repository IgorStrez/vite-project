import { Link } from 'react-router-dom';

const Gedicht163 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Стихи — не просто так!..
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Стихи — не просто так!..</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Стихи – не просто так!<br />
А рифма – это знак<br />
Тебе,</p>
<p style={{textAlign: 'center'}}>Что слово это – то.<br />
Да, трудно. Но зато<br />
Судьбе</p>
<p style={{textAlign: 'center'}}>Не велено мешать.<br />
И не беде решать,<br />
Зачем</p>
<p style={{textAlign: 'center'}}>И как тебе творить.<br />
И с Богом говорить<br />
О чем.</p>
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

export default Gedicht163;
