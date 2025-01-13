import { Link } from 'react-router-dom';

const Gedicht321 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Тоска рядится в любые маски…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Тоска рядится в любые маски…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Тоска рядится в любые маски,<br />
Любые платья, любые краски!</p>
<p style={{textAlign: 'center'}}>Всё ярко, пёстро, блестит-сверкает!..<br />
Да, поначалу и развлекает,<br />
Но – ненадолго; и вновь томишься…<br />
Удрать – стремишься.</p>
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

export default Gedicht321;
