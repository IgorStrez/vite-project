import { Link } from 'react-router-dom';

const Gedicht404 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Вся жизнь — какой-то полусон…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Вся жизнь — какой-то полусон…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Вся жизнь – какой-то полусон,<br />
Бред наяву.</p>
<p style={{textAlign: 'center'}}>И не окончится ведь он!<br />
Я всё живу.</p>
<p style={{textAlign: 'center'}}>Хоть по уму-то уж давно!..<br />
Да что о том.</p>
<p style={{textAlign: 'center'}}>И, вроде, выпито вино;<br />
И о простом</p>
<p style={{textAlign: 'center'}}>Кивке, участье, не любви! –<br />
Уж позабыл.</p>
<p style={{textAlign: 'center'}}>И не кричи, и не зови –<br />
Давно остыл</p>
<p style={{textAlign: 'center'}}>И пепел даже, и зола!..<br />
Лишь хлад утрат.</p>
<p style={{textAlign: 'center'}}>И ни добра в душе, ни зла;<br />
Ни рай, ни ад…</p>
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

export default Gedicht404;
