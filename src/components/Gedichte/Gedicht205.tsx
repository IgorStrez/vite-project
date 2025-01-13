import { Link } from 'react-router-dom';

const Gedicht205 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Судьба мудрее нас…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Судьба мудрее нас…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Судьба мудрее нас,<br />
Хоть кажется подчас,</p>
<p style={{textAlign: 'center'}}>Что лучше бы вот тут!..<br />
И здесь бы не мешало…</p>
<p style={{textAlign: 'center'}}>Но понимаешь позже, что паллады не растут.<br />
Они рождаются с оружьем и не ждут<br />
Нимало!</p>
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

export default Gedicht205;
