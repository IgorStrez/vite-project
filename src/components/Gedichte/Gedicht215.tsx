import { Link } from 'react-router-dom';

const Gedicht215 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Слепых случайностей порой…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Слепых случайностей порой…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Слепых случайностей порой<br />
Цепочки<br />
Своей безумною игрой –<br />
До точки!</p>
<p style={{textAlign: 'center'}}>Одни лишь коды* да кресты –<br />
Повсюду.<br />
И не сбываются мечты,<br />
И чуду,</p>
<p style={{textAlign: 'center'}}>Увы, уже не суждено<br />
Свершиться.<br />
И остаётся… лишь одно?..<br />
Решиться?</p>
<p>___</p>
<p>*Кода (coda) – муз. знак, конец произведения</p>
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

export default Gedicht215;
