import { Link } from 'react-router-dom';

const Gedicht142 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Муза приходит ночью…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Муза приходит ночью…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Муза приходит ночью.<br />
И будто воочью –<br />
Трепетанье крыл.</p>
<p style={{textAlign: 'center'}}>И снова – сердце бьётся,<br />
И вновь – Судьба смеётся:<br />
«Да! Был ты, был!</p>
<p style={{textAlign: 'center'}}>Жил на этом свете!<br />
И вечности при свете<br />
Будет тебе, что сказать.</p>
<p style={{textAlign: 'center'}}>И – тишина воцарится,<br />
И – всё тебе там простится.<br />
Лишь станешь стихи читать».</p>
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

export default Gedicht142;
