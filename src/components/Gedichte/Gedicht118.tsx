import { Link } from 'react-router-dom';

const Gedicht118 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Казанова
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Казанова</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Казанова, Казанова!<br />
Ничего уже не ново.<br />
Всё изведано давно.<br />
Но!</p>
<p style={{textAlign: 'center'}}>Казанова, Казанова!<br />
Только кровь пылает снова,<br />
Усмехается любовь<br />
Вновь.</p>
<p style={{textAlign: 'center'}}>Соблазнитель, обольститель,<br />
Дам всевластный повелитель,<br />
Судеб ветреный губитель<br />
И сердец!</p>
<p style={{textAlign: 'center'}}>И невольно преклоняет<br />
Жертва слух. И вся внимает,<br />
И горит, и тает, тает…<br />
И – конец!</p>
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

export default Gedicht118;
