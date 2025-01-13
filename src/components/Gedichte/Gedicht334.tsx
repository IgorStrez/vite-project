import { Link } from 'react-router-dom';

const Gedicht334 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Чья душа моя?..
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Чья душа моя?..</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Чья<br />
душа моя?<br />
Да ничья!<br />
Моя!<br />
И я</p>
<p style={{textAlign: 'center'}}>Не продам её,<br />
не разорю её,<br />
Ни татарам её,<br />
ни Царю её.</p>
<p style={{textAlign: 'center'}}>Да уж лучше я тогда её –<br />
по кочкам да по листочкам,<br />
по словечкам да по строчкам<br />
Разбазарю-расточу –<br />
так хочу!</p>
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

export default Gedicht334;
