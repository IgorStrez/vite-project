import { Link } from 'react-router-dom';

const Gedicht247 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Прошедшее — смутно…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Прошедшее — смутно…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Прошедшее – смутно,<br />
Грядущее – тоже.<br />
В душе не без смут, но<br />
Однако похоже,</p>
<p style={{textAlign: 'center'}}>Что худшее – было,<br />
А лучшее – ой-ли?<br />
И сердце – остыло.<br />
И в схватку ли, в бой ли</p>
<p style={{textAlign: 'center'}}>Уже – без охоты.<br />
А надо ли, право?<br />
Все эти заботы,<br />
Всё это – забава,</p>
<p style={{textAlign: 'center'}}>Всего лишь отрава,<br />
Чтоб только забыться.<br />
Надеждам – не сбыться!</p>
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

export default Gedicht247;
