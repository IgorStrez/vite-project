import { Link } from 'react-router-dom';

const Gedicht11 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Ангел ночи, ангел смерти!..
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Ангел ночи, ангел смерти!..</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Ангел ночи, ангел смерти!<br />
Я тебя уже заждался.<br />
Поскорей в аду проверьте,<br />
Отчего я задержался</p>
<p style={{textAlign: 'center'}}>На земле на этой грешной,<br />
И проклятой, и любимой.<br />
То потешной, то кромешной.<br />
С шапито и с Хиросимой.</p>
<p style={{textAlign: 'center'}}>На которой – понемножку<br />
И восторгов, и печалей.<br />
Прилетай! И – в путь-дорожку.<br />
В никуда! За далью далей</p>
<p style={{textAlign: 'center'}}>Мы отыщем тот прекрасный,<br />
Самый чудный град на свете.<br />
Где молиться – труд напрасный.<br />
И где память тонет. В Лете.</p>
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

export default Gedicht11;
