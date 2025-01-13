import { Link } from 'react-router-dom';

const Gedicht380 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Жизнь до смешного коротка…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Жизнь до смешного коротка…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Жизнь до смешного коротка!<br />
Проходит – мигом.<br />
Как у какого-то снетка.<br />
Да нет, по книгам</p>
<p style={{textAlign: 'center'}}>Всё очень умно, глубоко:<br />
«Задачи», «цели»!..<br />
Реально ж – просто и легко:<br />
Поймали – съели.</p>
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

export default Gedicht380;
