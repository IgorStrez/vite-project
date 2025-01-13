import { Link } from 'react-router-dom';

const Gedicht66 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Что же, что же, что же!..
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Что же, что же, что же!..</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Что же, что же, что же!<br />
Боже, боже, боже!<br />
Будет, будет, будет?!</p>
<p style={{textAlign: 'center'}}>Может, может, может,<br />
Бог мне и поможет,<br />
Может, – и забудет.</p>
<p style={{textAlign: 'center'}}>Может, – и осудит!<br />
Сердце мне остудит.<br />
И, бесстрастней Кая,</p>
<p style={{textAlign: 'center'}}>Побреду по свету:<br />
«Герду?.. А, вот эту?..<br />
Кто такая?»</p>
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

export default Gedicht66;
