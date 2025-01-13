import { Link } from 'react-router-dom';

const Gedicht303 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Безнадёжности бездна…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Безнадёжности бездна…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Безнадёжности бездна.<br />
Наверно – без дна.<br />
Только клубы тумана<br />
Да серость одна.</p>
<p style={{textAlign: 'center'}}>Что-то вяло бормочет:<br />
«Бу-бу-бу!.. Бу-бу-бу!..»<br />
Будто тускло пророчит<br />
Про худую судьбу,</p>
<p style={{textAlign: 'center'}}>От которой не скрыться,<br />
Не уйти, не спастись.<br />
И мечтаньям – не сбыться!<br />
И со счастьем – простись.</p>
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

export default Gedicht303;
