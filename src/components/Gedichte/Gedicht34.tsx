import { Link } from 'react-router-dom';

const Gedicht34 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Ты мне снишься хоть реже…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Ты мне снишься хоть реже…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Ты мне снишься хоть реже,<br />
Но пока ещё – всё же.<br />
Ну, и где же ты? где же?!<br />
Ты ведь лжёшь же всё! лжёшь же!<br />
Тебя нет ведь на свете!<br />
Ты фантазия, сказка!</p>
<p style={{textAlign: 'center'}}>И опять на рассвете<br />
Ты растаешь. Лишь ласка,..<br />
Поцелуя прощального сладкие муки…<br />
Боль. Разлуки.</p>
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

export default Gedicht34;
