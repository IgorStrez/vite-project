import { Link } from 'react-router-dom';

const Gedicht81 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Дотла!..
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Дотла!..</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Дотла!<br />
Сгорают в пламени времён<br />
и мысли, и дела.<br />
Не остаётся даже и имён –<br />
лишь пепел да зола.</p>
<p style={{textAlign: 'center'}}>Слова же – нет!<br />
И дружеский привет<br />
дойдёт и чрез столетий вереницу:<br />
Лишь пожелтевшую переверни страницу,<br />
И снова пред тобою проплывут<br />
печали, радости и муки тех, кого и прах-то уж истлел давно.</p>
<p style={{textAlign: 'center'}}>Но!<br />
Тут –<br />
Они живут.</p>
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

export default Gedicht81;
