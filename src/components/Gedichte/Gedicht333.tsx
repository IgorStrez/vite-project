import { Link } from 'react-router-dom';

const Gedicht333 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Мечталось, хотелось!..
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Мечталось, хотелось!..</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Мечталось, хотелось!..<br />
Да вот не успелось,<br />
И не допелось.</p>
<p style={{textAlign: 'center'}}>Недоигралось,<br />
Недострадалось,<br />
Недотерпелось.</p>
<p style={{textAlign: 'center'}}>Недожалелось!..<br />
Недолюбилось,<br />
Недожелалось!</p>
<p style={{textAlign: 'center'}}>Змейкой ввинтилось,<br />
Попритерпелось,<br />
Пригрелось-прижалось.</p>
<p style={{textAlign: 'center'}}>Поосмотрелось,<br />
Да и осталось…<br />
Кошкой прокралось!</p>
<p style={{textAlign: 'center'}}>Тихо-претихо…<br />
Лихо.</p>
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

export default Gedicht333;
