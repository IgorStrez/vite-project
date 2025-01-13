import { Link } from 'react-router-dom';

const Gedicht106 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Одиссей
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Одиссей</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Всё испытал он, всё преодолел.<br />
Все искушенья и страдания земные:<br />
Пение сирен, Калипсо жаркий плен,<br />
Циклопов остров, Сциллы и Харибды ужас…<br />
Ну, и чего добился?<br />
Что в итоге?<br />
Вновь Итака?.. На Итаку возвращенье?.. Круг замкнулся?!<br />
Пенелопа?.. Двадцать лет! Какая «Пенелопа»?!<br />
Ну, женихи ещё. Когда б не уезжал он, то женихов вообще бы не было. –<br />
Он был царем Итаки. Им он и остался. Мужем Пенелопы. Всего лишь.<br />
Через двадцать лет страданий!<br />
Так стоило ли уезжать?</p>
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

export default Gedicht106;
