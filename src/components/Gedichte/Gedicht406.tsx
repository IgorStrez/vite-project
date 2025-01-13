import { Link } from 'react-router-dom';

const Gedicht406 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Мы книгу жизни не читаем…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Мы книгу жизни не читаем…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Мы книгу жизни не читаем,<br />
А так… лишь нехотя листаем.<br />
Через страничку, быстро, наспех!..<br />
И в результате – курам на смех:</p>
<p style={{textAlign: 'center'}}>«Ну да, родился,.. ел да пил…<br />
Женился, деток наплодил…<br />
Не открывал… Не находил…<br />
Нет, под луною не бродил…<br />
Да сам не знаю!.. Не любил…» –<br />
«Дебил».</p>
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

export default Gedicht406;
