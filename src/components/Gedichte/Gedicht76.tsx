import { Link } from 'react-router-dom';

const Gedicht76 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Одних комедий череда…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Одних комедий череда…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Одних комедий череда,<br />
Лишь смех сквозь слёзы.<br />
И утекают, как вода,<br />
Надежды, грёзы…</p>
<p style={{textAlign: 'center'}}>Признаний сладостных поток.<br />
Жаль, запоздалый…<br />
Нам вместо знамени – платок.<br />
От крови – алый.</p>
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

export default Gedicht76;
