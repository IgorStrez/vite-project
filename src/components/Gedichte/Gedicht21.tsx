import { Link } from 'react-router-dom';

const Gedicht21 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Всё это было, как вчера…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Всё это было, как вчера…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Всё это было, как вчера:<br />
Жара,<br />
Июль,<br />
Полупрохладный вестибюль;<br />
И ты в толпе наташ и юль.</p>
<p style={{textAlign: 'center'}}>И – яркий свет в душе!<br />
И пламя – жжёт!!<br />
Но сердце плачет и поёт…<br />
Клише!</p>
<p style={{textAlign: 'center'}}>Да только вот беда.<br />
Ожог остался. Навсегда.</p>
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

export default Gedicht21;
