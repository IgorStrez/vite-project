import { Link } from 'react-router-dom';

const Gedicht206 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Нет ни ада, ни рая…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Нет ни ада, ни рая…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Нет ни ада, ни рая.<br />
Ни конца и ни края<br />
Нашим бедам земным.</p>
<p style={{textAlign: 'center'}}>Только боли да муки.<br />
Только горечь разлуки<br />
Да предательства дым.</p>
<p style={{textAlign: 'center'}}>Чёрный липкий и вязкий,<br />
Как в какой-нибудь сказке<br />
Про кощееву смерть.</p>
<p style={{textAlign: 'center'}}>Что таится в иголке.<br />
Но царевич – на Волке!<br />
Надо только успеть.</p>
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

export default Gedicht206;
