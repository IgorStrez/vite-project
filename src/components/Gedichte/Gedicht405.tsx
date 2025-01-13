import { Link } from 'react-router-dom';

const Gedicht405 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Нам никогда уже не стать никем…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Нам никогда уже не стать никем…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Нам никогда уже не стать<br />
Никем.<br />
Уж ничего не «наверстать»,<br />
Затем,<br />
Что ведь всё меньше остаётся даже не проблем,<br />
А просто тем,<br />
К которым отношенье хоть имеем в жизни мы!<br />
Увы.</p>
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

export default Gedicht405;
