import { Link } from 'react-router-dom';

const Gedicht365 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Жизнь — скучная штука…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Жизнь — скучная штука…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Жизнь – скучная штука,<br />
Бессмыслица просто.<br />
Да сущая мука!<br />
И лет ты хоть до ста</p>
<p style={{textAlign: 'center'}}>Копти себе небо –<br />
Всё та же… житуха:<br />
Ни зрелищ, ни хлеба!<br />
Ни рыла, ни уха.</p>
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

export default Gedicht365;
