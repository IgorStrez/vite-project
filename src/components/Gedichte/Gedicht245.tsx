import { Link } from 'react-router-dom';

const Gedicht245 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Грустно, скучно и тоскливо…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Грустно, скучно и тоскливо…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Грустно, скучно и тоскливо.<br />
Стрелки движутся лениво.<br />
Ночь течёт неторопливо.<br />
Жизнь проходит?.. Эко диво!</p>
<p style={{textAlign: 'center'}}>За окном уже светает.<br />
Ангел к Богу улетает.<br />
Демон в бездне пропадает.<br />
Тихо месяц в небе тает.</p>
<p style={{textAlign: 'center'}}>И вот так вот день за днём.<br />
Тьма сменяется огнём.<br />
Снег сменяется дождём.<br />
То отбой, а то подъём.</p>
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

export default Gedicht245;
