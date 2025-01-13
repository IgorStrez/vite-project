import { Link } from 'react-router-dom';

const Gedicht30 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Мы видим только маски…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Мы видим только маски…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Мы видим только маски<br />
И слушаем лишь сказки.<br />
Мол, ах да ох!</p>
<p style={{textAlign: 'center'}}>А что в душе творится,<br />
Нам даже и не снится.<br />
Да видит бог!</p>
<p style={{textAlign: 'center'}}>«Люблю, воркует, милый!»<br />
А думает: «Постылый! –<br />
Подчас она. –</p>
<p style={{textAlign: 'center'}}>Когда б не злая доля!..<br />
Когда бы вольна воля!..»<br />
А чья – вина?</p>
<p style={{textAlign: 'center'}}>Что люди лицемерны,<br />
Что чувства эфемерны,<br />
Кругом – враньё?</p>
<p style={{textAlign: 'center'}}>Лишь ложь да лицедейство,<br />
Да мелкое злодейство,<br />
Да – вороньё.</p>
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

export default Gedicht30;
