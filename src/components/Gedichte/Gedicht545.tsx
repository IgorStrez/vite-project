import { Link } from 'react-router-dom';

const Gedicht545 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Гимн женщин
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Гимн женщин</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Мы – охотницы на мужчин,<br />
На балбесов и дурачин,<br />
Ослов.</p>
<p style={{textAlign: 'center'}}>Все орудья всегда – при нас.<br />
Да чего там! Лишь бросим глаз,<br />
Без слов.</p>
<p style={{textAlign: 'center'}}>И безропотно жертва – к нам.<br />
К нашим длинным и стройным ногам.<br />
Хо-хо!</p>
<p style={{textAlign: 'center'}}>Всё, добыче не ускользнуть!<br />
Заморочить да обмануть?..<br />
Легко!</p>
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

export default Gedicht545;
