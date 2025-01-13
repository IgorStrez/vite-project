import { Link } from 'react-router-dom';

const Gedicht315 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Вот интересно…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Вот интересно…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Вот интересно: жил я, жил…<br />
Как все вокруг.<br />
Не так уж, чтобы «не тужил»,<br />
Но всё же друг</p>
<p style={{textAlign: 'center'}}>Считал, что – друг.<br />
А враг есть враг.<br />
Жена –<br />
Жена,<br />
Вина –<br />
Вина.<br />
А всё не так!</p>
<p style={{textAlign: 'center'}}>Как позже выяснилось вдруг.<br />
И мир – иной.<br />
Короче, вышел я – дурак.<br />
Хоть вой, хоть ной!</p>
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

export default Gedicht315;
