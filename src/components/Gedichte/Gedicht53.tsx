import { Link } from 'react-router-dom';

const Gedicht53 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Грустная история
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Грустная история</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Я любил её, как мог.<br />
Мы рассталися потом…<br />
Исходил я сто дорог<br />
И вернулся в отчий дом.</p>
<p style={{textAlign: 'center'}}>Повстречались и опять.<br />
Пара слов: привет-привет!<br />
Всё, как прежде. Время – вспять.<br />
Да любови только нет.</p>
<p style={{textAlign: 'center'}}>Я не тот, она не та –<br />
И пошлее, и грубей.<br />
Уж поблекла красота…<br />
И не то, чтобы слабей,</p>
<p style={{textAlign: 'center'}}>А вообще – ну, ни-ни-ни!<br />
Ни на сердце, ни в душе.<br />
«Я, мол!.. Ты, мол!.. Не вини!..»<br />
Лишь клише, клише, клише…</p>
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

export default Gedicht53;
