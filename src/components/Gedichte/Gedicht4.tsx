import { Link } from 'react-router-dom';

const Gedicht4 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Расскажи мне, ангел тьмы…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Расскажи мне, ангел тьмы…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Расскажи мне, ангел тьмы,<br />
Про разбитые мечты<br />
И про пенный след судьбы<br />
У кормы.</p>
<p style={{textAlign: 'center'}}>Расскажи, как предают,<br />
Как в глаза любимым лгут.<br />
И какого цвета кровь<br />
У иуд.</p>
<p style={{textAlign: 'center'}}>Хорошо у вас в аду?<br />
Ладно, как-нибудь зайду.<br />
Загляну на огонёк,<br />
Забреду.</p>
<p style={{textAlign: 'center'}}>Ты спешишь? Ну что ж, прощай.<br />
Но смотри не забывай!<br />
Иногда хоть прилетай,<br />
Навещай!</p>
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

export default Gedicht4;
