import { Link } from 'react-router-dom';

const Gedicht25 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Словно раненые птицы…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Словно раненые птицы…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Словно раненые птицы,<br />
Души рвутся за границы</p>
<p style={{textAlign: 'center'}}>Бытия –<br />
Ты и я.</p>
<p style={{textAlign: 'center'}}>Там, под звёздами чужими,<br />
Станем мы совсем другими:</p>
<p style={{textAlign: 'center'}}>Чище, лучше и светлей.<br />
И мудрей.</p>
<p style={{textAlign: 'center'}}>Все постигнем мира тайны<br />
И безгрешны, беспечальны</p>
<p style={{textAlign: 'center'}}>Будем тихо жить вдвоём –<br />
И умрём.</p>
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

export default Gedicht25;
