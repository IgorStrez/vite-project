import { Link } from 'react-router-dom';

const Gedicht89 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Антихрист
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Антихрист</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Если б мне явился Бог,<br />
Я посмел бы, я бы смог<br />
На Него поднять свой взор.<br />
Ну, положим, и не спор,<br />
Но, пожалуй, бы спросил:</p>
<p style={{textAlign: 'center'}}>«Как Ты, Боже, допустил?<br />
И куда смотрел, где был,<br />
Когда я от боли выл,<br />
Подыхал в ночи как пёс…<br />
Как я это перенёс!!..<br />
Надрывая душу в кровь,<br />
Звал Тебя я вновь и вновь.<br />
Я кричал, а Ты молчал.<br />
Что же Ты не отвечал?<br />
Почему Ты не помог?!<br />
Глупый Бог»</p>
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

export default Gedicht89;
