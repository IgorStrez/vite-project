import { Link } from 'react-router-dom';

const Gedicht463 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Чёт — нечёт…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Чёт — нечёт…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Чёт – нечёт?<br />
Ангел – чёрт?<br />
А?</p>
<p style={{textAlign: 'center'}}>Выход – вход?<br />
Ночь – восход?<br />
Да-а…</p>
<p style={{textAlign: 'center'}}>Сразу хрен разберёшь!<br />
Правда то али ложь,<br />
Ведь</p>
<p style={{textAlign: 'center'}}>Распознай-ка обман!<br />
Вроде золото!.. Ан<br />
Медь.</p>
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

export default Gedicht463;
