import { Link } from 'react-router-dom';

const Gedicht366 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Женщинам
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Женщинам</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Слова, слова!..<br />
И голова<br />
Кружится</p>
<p style={{textAlign: 'center'}}>От грёз, от фраз!..<br />
В который раз<br />
Божится</p>
<p style={{textAlign: 'center'}}>Душа, что больше – ни-ни-ни!..<br />
Ни разу!</p>
<p style={{textAlign: 'center'}}>Но позови!.. но – помани!<br />
И – сразу!!</p>
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

export default Gedicht366;
