import { Link } from 'react-router-dom';

const Gedicht563 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Современным исполнителям
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Современным исполнителям</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>«Не сыпь мне соль на раны!» –<br />
Поют с утра бараны.<br />
Ну, блеют.</p>
<p style={{textAlign: 'center'}}>И овцы – в умиленьи,<br />
Их слушают в волненьи<br />
И – млеют.</p>
<p style={{textAlign: 'center'}}>Идиллия, в натуре!<br />
Одной знакомой дуре…<br />
Ну, тёлке!</p>
<p style={{textAlign: 'center'}}>Я тоже раз пытался.<br />
Но сколько ни старался…<br />
Э-эх, ёлки!</p>
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

export default Gedicht563;
