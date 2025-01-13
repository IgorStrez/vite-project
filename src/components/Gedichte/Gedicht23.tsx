import { Link } from 'react-router-dom';

const Gedicht23 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Расставание
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Расставание</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Любовь течёт расплавленным металлом,<br />
И верность – слякоть на полу, но это лишь цветочки!<br />
И дело остаётся лишь за малым –<br />
Расставить точки!</p>
<p style={{textAlign: 'center'}}>Пора! Ведь дальше будет только хуже.<br />
Это ясно, в этом нет, увы! сомнений.<br />
Ну, что ты, милая!.. Ну, успокойся!.. Ну же!.. –<br />
Без сожалений!</p>
<p style={{textAlign: 'center'}}>Так проще. Так быстрее заживают<br />
Сердца и души.<br />
Так лучше. Так скорее умирают…<br />
Но ты не слушай!</p>
<p style={{textAlign: 'center'}}>Да пошутил я! Оговорился.<br />
Ну что ты, право!<br />
Всё-всё! Прощаемся!<br />
Тебе налево, а мне – направо.</p>
<p style={{textAlign: 'center'}}>Развилка жизни. Два поворота.<br />
Судьба-проказница!..<br />
Налево – счастье, направо – …<br />
Впрочем, какая разница!</p>
<p style={{textAlign: 'center'}}>Ведь дальше – хуже.<br />
И ни надежды, и ни сомнений.<br />
Смелее! Ну же!<br />
Без колебаний! Без сожалений!</p>
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

export default Gedicht23;
