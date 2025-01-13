import { Link } from 'react-router-dom';

const Gedicht23 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Беда — подружка…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Беда — подружка…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Беда – подружка;<br />
Удача – шлюшка,<br />
Паскуда!</p>
<p style={{textAlign: 'center'}}>«Да-да!.. Навеки!..»<br />
А смежишь веки –<br />
Иуда</p>
<p style={{textAlign: 'center'}}>Уж испарилась.<br />
Как провалилась!<br />
Нет, право.</p>
<p style={{textAlign: 'center'}}>Беда лениво:<br />
«Да эко диво!<br />
Шалава…»</p>
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

export default Gedicht23;
