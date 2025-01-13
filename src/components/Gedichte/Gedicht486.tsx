import { Link } from 'react-router-dom';

const Gedicht486 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Эпитафия поэтам
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Эпитафия поэтам</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Уходят – вовремя.<br />
И не иначе.<br />
Невмочь уж бремя!<br />
А наипаче,<br />
Душа – допела!<br />
До предела!<br />
До последней ноты.</p>
<p style={{textAlign: 'center'}}>И надоело.<br />
Уж всё. До рвоты!!</p>
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

export default Gedicht486;
