import { Link } from 'react-router-dom';

const Gedicht105 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Перечитывая Данта 2
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Перечитывая Данта 2</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Вчитаюсь в бронзовые строки<br />
того, кому Вергилий был вожатым<br />
по тропам сумрачным Аида.<br />
Кому показывал круги его зловещие,<br />
и муки грешников,<br />
внутри кругов томящихся.<br />
И словно наяву услышу крики ужаса,<br />
костров бесчисленных увижу злые отблески<br />
и запах серы и смолы почувствую.<br />
“Оставь надежду всяк, сюда входящий” – этим<br />
всё сказано.<br />
Добавить больше нечего.<br />
Finita la comedia.</p>
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

export default Gedicht105;
