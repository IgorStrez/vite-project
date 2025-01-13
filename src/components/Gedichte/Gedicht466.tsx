import { Link } from 'react-router-dom';

const Gedicht466 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Я когда-то любил…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Я когда-то любил…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Я когда-то любил<br />
И мечтал, и страдал!<br />
А потом позабыл,<br />
Да и сердцем устал.</p>
<p style={{textAlign: 'center'}}>Тишь да гладь, да покой,<br />
Ни забот ни хлопот!<br />
Скучновато порой,<br />
Но зато без невзгод.</p>
<p style={{textAlign: 'center'}}>И без гроз и без бурь,<br />
Без помех!<br />
А мечты эти – дурь!<br />
Смех да грех.</p>
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

export default Gedicht466;
