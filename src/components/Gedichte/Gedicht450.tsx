import { Link } from 'react-router-dom';

const Gedicht450 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Если жизнь мою полистать…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Если жизнь мою полистать…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Если жизнь мою полистать –<br />
Ну, сколько страниц!<br />
Да роману просто подстать!<br />
И событий куча, и лиц!..</p>
<p style={{textAlign: 'center'}}>Этот!.. Та ещё!.. Эта!.. Та!..<br />
Да Гоморра просто! Содом!..<br />
Коли с чистого бы листа… –<br />
На помойку весь этот дурдом.</p>
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

export default Gedicht450;
