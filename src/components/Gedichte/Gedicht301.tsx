import { Link } from 'react-router-dom';

const Gedicht301 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Что же там, за горизонтом?..
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Что же там, за горизонтом?..</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Что же там, за горизонтом?<br />
Встреча с чёртом?</p>
<p style={{textAlign: 'center'}}>С Мухаммедом или с Буддой?<br />
Иль с апостолом Иудой?<br />
Там, за Понтом?..</p>
<p style={{textAlign: 'center'}}>Или нет там ни хрена,<br />
Кроме мрака?<br />
И вина там не вина!..</p>
<p style={{textAlign: 'center'}}>Только рака<br />
Горе красит да беда.<br />
А летейская вода!..<br />
Впрочем, врака.</p>
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

export default Gedicht301;
