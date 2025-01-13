import { Link } from 'react-router-dom';

const Gedicht100 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Страшный суд
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Страшный суд</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>По зову ангельской трубы<br />
Восстанут божии рабы<br />
Из праха.</p>
<p style={{textAlign: 'center'}}>Поковыляют, побредут<br />
На тот последний, Страшный суд!..<br />
И страха</p>
<p style={{textAlign: 'center'}}>Густая, тёмная волна!..<br />
И – «да воздастся всем сполна!»<br />
До края!!</p>
<p style={{textAlign: 'center'}}>Но я не божий. Я – ничей.<br />
Мне ни прощений, ни свечей.<br />
Ни рая.</p>
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

export default Gedicht100;
