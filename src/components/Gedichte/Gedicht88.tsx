import { Link } from 'react-router-dom';

const Gedicht88 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Заклятие Демона
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Заклятие Демона</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Когда ты один в ночи,<br />
А мир враждебен и пуст;<br />
И сердце кричит: «молчи!!»,<br />
Но боль рвётся из уст;</p>
<p style={{textAlign: 'center'}}>И кажется – все враги!<br />
И кажется – выхода нет!!<br />
Ты лишь шепни: «помоги»,<br />
И я отзовусь в ответ.</p>
<p style={{textAlign: 'center'}}>И я утешу тебя,<br />
Лишь обернись назад!<br />
И поцелую, любя.<br />
И унесу. В ад.</p>
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

export default Gedicht88;
