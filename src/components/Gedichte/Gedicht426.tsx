import { Link } from 'react-router-dom';

const Gedicht426 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Закончились давно…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Закончились давно…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Всё кончилось давно –<br />
И дружба, и любовь.<br />
Как старое кино –<br />
Бывает, смотришь вновь,</p>
<p style={{textAlign: 'center'}}>Но знаешь наперёд,<br />
Что будет через миг:<br />
Предаст… продаст… уйдёт…<br />
Сумел… посмел… достиг…</p>
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

export default Gedicht426;
