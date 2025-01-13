import { Link } from 'react-router-dom';

const Gedicht19 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Не вспоминай!..
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Не вспоминай!..</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Не вспоминай!<br />
И не жалей!!<br />
Не снись, тем более.<br />
Но только знай:<br />
Всё злей и злей!..<br />
Кричу от боли я<br />
Во снах всё глуше и страшней,<br />
Лишь только вижу!..</p>
<p style={{textAlign: 'center'}}>И горе шепчет всё нежней.<br />
Да слов – не слышу.</p>
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

export default Gedicht19;
