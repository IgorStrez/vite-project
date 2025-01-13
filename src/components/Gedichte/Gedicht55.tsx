import { Link } from 'react-router-dom';

const Gedicht55 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Любовь — игрушка…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Любовь — игрушка…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Любовь – игрушка.<br />
Юла иль мячик.<br />
В неё старушка,<br />
Юница, мальчик</p>
<p style={{textAlign: 'center'}}>Играют страстно,<br />
В мечтах сгорая!<br />
Но всё напрасно.<br />
И, забирая</p>
<p style={{textAlign: 'center'}}>С усмешкой фишки,<br />
Судьба зевает:<br />
«Эх вы, детишки!..<br />
Дотла?.. Бывает…»</p>
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

export default Gedicht55;
