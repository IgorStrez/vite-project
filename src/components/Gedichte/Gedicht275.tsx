import { Link } from 'react-router-dom';

const Gedicht275 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → У счастья завтра нет…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>У счастья завтра нет…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>У счастья «завтра» нет,<br />
Но нет его и у беды.<br />
И прошлого пустой отсвет –<br />
Лишь на воде следы.</p>
<p style={{textAlign: 'center'}}>Всё начинается сначала –<br />
Каждый миг.<br />
И у причала –<br />
Бриг.</p>
<p style={{textAlign: 'center'}}>И алый парус плещет и зовёт;<br />
И ветер душу овевает и поёт;<br />
И океан волнуется, ревёт;<br />
И будущее – ждёт!</p>
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

export default Gedicht275;
