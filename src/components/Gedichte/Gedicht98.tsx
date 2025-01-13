import { Link } from 'react-router-dom';

const Gedicht98 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Демон-4
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Демон-4</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Он светел и прекрасен!<br />
Да только вот напрасен<br />
Тот свет.</p>
<p style={{textAlign: 'center'}}>Лишь дразнит, да не греет;<br />
Лишь блазнит, точно мреет…<br />
Комет</p>
<p style={{textAlign: 'center'}}>Так отблески порою<br />
Нам мнятся не игрою,<br />
О нет!</p>
<p style={{textAlign: 'center'}}>А несомненным знаком,<br />
Что где-то там, за мраком!.. –<br />
Ответ.</p>
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

export default Gedicht98;
