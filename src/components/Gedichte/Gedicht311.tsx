import { Link } from 'react-router-dom';

const Gedicht311 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Слова — как птички…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Слова — как птички…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Слова – как птички.<br />
Вспорхнут – не поймаешь.<br />
Слова – отмычки.<br />
К сердцу их не спеша подбираешь, перебираешь…<br />
Щёлк! И заходи – пакуй вещички!<br />
Всё готово,<br />
Сердце для тебя теперь, как книжка,<br />
доверчиво раскрыто.</p>
<p style={{textAlign: 'center'}}>И снова!<br />
Разоряешь чью-то душу и убегаешь трусливо, как воришка.<br />
И всё шито-крыто!</p>
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

export default Gedicht311;
