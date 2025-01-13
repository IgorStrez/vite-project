import { Link } from 'react-router-dom';

const Gedicht424 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Только боли ушаты…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Только боли ушаты…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Только боли ушаты;<br />
Да тоска, да отчаянье!<br />
Не спасают стишаты.<br />
Но молчание<br />
Уж совсем нестерпимо!</p>
<p style={{textAlign: 'center'}}>Сердце ноет и плачет;<br />
Что всё мимо и мимо…<br />
Зайцем скачет.</p>
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

export default Gedicht424;
