import { Link } from 'react-router-dom';

const Gedicht43 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Ты снилась мне всегда…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Ты снилась мне всегда…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Ты снилась мне всегда – как дар.<br />
Лишь очень редко, иногда!<br />
И в жизни ужас и кошмар<br />
Луч света проникал тогда.<br />
И озарял её! И свет<br />
Тот долго-долго!.. И тепло…</p>
<p style={{textAlign: 'center'}}>Но в прошлом всё. Теперь уж – нет.<br />
Сошло. Зашло. Навек ушло.</p>
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

export default Gedicht43;
