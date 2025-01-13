import { Link } from 'react-router-dom';

const Gedicht108 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Медуза
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Медуза</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Ну что, герой, взгляни в лицо судьбе!<br />
Чего ж ты прячешься трусливо за щитом Паллады?</p>
<p style={{textAlign: 'center'}}>Я о пощаде не молю, о, нет! – не внемлешь ты мольбе!<br />
Ты убивать сюда пришёл – и жаждешь ты награды.</p>
<p style={{textAlign: 'center'}}>Моей главы! Ну что ж, я безоружна – ты с мечом.<br />
Взмахни им – и мои услышишь стоны.</p>
<p style={{textAlign: 'center'}}>Но если прав ты, честен! Если корысть не при чём!<br />
Осмелься – загляни в глаза Горгоны!</p>
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

export default Gedicht108;
