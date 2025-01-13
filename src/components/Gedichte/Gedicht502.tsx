import { Link } from 'react-router-dom';

const Gedicht502 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Из цикла Тюрьма, Хочется порой умереть…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Из цикла Тюрьма, <br />Хочется порой умереть…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Хочется порой умереть.<br />
Но смерть<br />
Это не выход,<br />
А вход<br />
В ад. (Лучше б наоборот!)<br />
А я ведь и так в аду.<br />
Что, если, умерев, снова я попаду<br />
В этот же спецСИЗО, в камеру 305?<br />
И вечным кошмаром опять<br />
Вспыхнет над дверью свет;<br />
И тревожно сосед<br />
Тронет за ногу: «Эй!<br />
Проверка! Вставай скорей».</p>
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

export default Gedicht502;
