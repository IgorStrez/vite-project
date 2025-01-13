import { Link } from 'react-router-dom';

const Gedicht141 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Где же эта Муза?..
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Где же эта Муза?..</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Где же эта Муза?!<br />
То она – обуза,<br />
То – нету.</p>
<p style={{textAlign: 'center'}}>Ждёшь – а всё впустую.<br />
Время – вхолостую.<br />
Эту</p>
<p style={{textAlign: 'center'}}>Музу-недотрогу,<br />
Помнится, ей-богу!<br />
Как-то летом…</p>
<p style={{textAlign: 'center'}}>Впрочем, это тайна.<br />
Только вам, нечайно,<br />
Под секретом!</p>
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

export default Gedicht141;
