import { Link } from 'react-router-dom';

const Gedicht22 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Забываются сны…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Забываются сны…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Забываются сны,<br />
И от нашей весны<br />
Не осталось следа.</p>
<p style={{textAlign: 'center'}}>И ни грёз, ни надежд,<br />
Ни красивых одежд –<br />
Всё срывает беда.</p>
<p style={{textAlign: 'center'}}>И кричат поезда,<br />
Уходя в никуда;<br />
И бокалы – до дна!!</p>
<p style={{textAlign: 'center'}}>И – гляди веселей!<br />
Ни о чём не жалей! –<br />
Гаснет наша звезда.</p>
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

export default Gedicht22;
