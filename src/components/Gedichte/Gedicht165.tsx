import { Link } from 'react-router-dom';

const Gedicht165 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Мне представляется порой…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Мне представляется порой…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Мне представляется порой,<br />
Что я совсем, совсем иной,<br />
С другой планеты.</p>
<p style={{textAlign: 'center'}}>Где нет коварства, нет измен;<br />
Где прах есть прах, а тлен есть тлен;<br />
И где корнеты</p>
<p style={{textAlign: 'center'}}>Ещё стреляются подчас.<br />
Где честь жива, а правда глаз<br />
Не потупляет.</p>
<p style={{textAlign: 'center'}}>И где любовь нашла приют;<br />
И где друзья не предают,<br />
Не оставляют.</p>
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

export default Gedicht165;
