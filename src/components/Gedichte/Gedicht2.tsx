import { Link } from 'react-router-dom';

const Gedicht2 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Ангел
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Ангел</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Ветерок прошелестел –<br/>
Ангел светлый прилетел.<br/>
За плечом моим стоит –<br/>
И молчит.</p>
<p style={{textAlign: 'center'}}>Ну, скажи хоть что-нибудь!<br/>
Посоветуй отдохнуть,<br/>
Да удачи нагадай –<br/>
Пожелай.</p>
<p style={{textAlign: 'center'}}>Как устал я, ангел мой,<br/>
От дороги от земной!<br/>
От трудов и от забот,<br/>
От невзгод.</p>
<p style={{textAlign: 'center'}}>Грешен я… А впрочем, что ж!<br/>
Ничего уж не вернёшь.<br/>
Возвращайся лучше в рай –<br/>
И прощай.</p>
<p style={{textAlign: 'center'}}>Ветерок прошелестел,<br/>
Ангел тёмный прилетел.<br/>
За другим плечом стоит<br/>
И – молчит.</p>
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

export default Gedicht2;
