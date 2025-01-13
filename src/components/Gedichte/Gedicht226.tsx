import { Link } from 'react-router-dom';

const Gedicht226 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Слово — финкой под душу…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Слово — финкой под душу…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Слово – финкой под душу,<br />
До рукоятки!<br />
И судьбу – словно грушу,<br />
И с бедой – будто в прятки.</p>
<p style={{textAlign: 'center'}}>Но не спутаешь суку,<br />
Ведь отыщет – по духу.<br />
И посадит на руку,<br />
И прихлопнет. Как муху.</p>
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

export default Gedicht226;
