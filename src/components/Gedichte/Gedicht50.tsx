import { Link } from 'react-router-dom';

const Gedicht50 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Ты приснилась мне снова…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Ты приснилась мне снова…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Ты приснилась мне снова.<br />
Ну, просил же: не надо!<br />
И опять ведь – ни слова!<br />
И как будто – не рада.</p>
<p style={{textAlign: 'center'}}>Так зачем же морочишь?<br />
Зачем же? Нет, правда?..<br />
Знать, потешиться хочешь?..<br />
Я ведь прав? Да?</p>
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

export default Gedicht50;
