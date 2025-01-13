import { Link } from 'react-router-dom';

const Gedicht28 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Твои губы и очи…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Твои губы и очи…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Твои губы и очи –<br />
Бездонные топи.<br />
Там – безумные ночи;<br />
Соломоновы копи,<br />
Где алмазов – без счёта!<br />
Без числа и без меры!!..</p>
<p style={{textAlign: 'center'}}>И миазмы – болота.<br />
Запах – серы.</p>
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

export default Gedicht28;
