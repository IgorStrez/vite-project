import { Link } from 'react-router-dom';

const Gedicht110 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Кассандра
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Кассандра</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Зачем я, дева неразумная,<br />
Себе такую участь уготовила?</p>
<p style={{textAlign: 'center'}}>Всё знаю я, всё ведаю,<br />
Но не могу помочь.</p>
<p style={{textAlign: 'center'}}>Не верят люди мне,<br />
Моим пророчествам.</p>
<p style={{textAlign: 'center'}}>Хоть истинны они<br />
Всегда бывают.</p>
<p style={{textAlign: 'center'}}>Всё всегда случается<br />
Так именно, как я предсказываю.</p>
<p style={{textAlign: 'center'}}>Я вижу!.. вижу!.. Но – молчанье.<br />
Говорить – бессмысленно.</p>
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

export default Gedicht110;
