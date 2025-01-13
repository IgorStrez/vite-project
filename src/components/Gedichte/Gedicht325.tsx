import { Link } from 'react-router-dom';

const Gedicht325 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Эх, удача, удача!..
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Эх, удача, удача!..</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Эх, удача, удача!<br />
Не жалея, не плача<br />
Расставались с тобою.</p>
<p style={{textAlign: 'center'}}>Навсегда аль на время?<br />
Безысходности бремя…<br />
И на пару с судьбою</p>
<p style={{textAlign: 'center'}}>Мы сидели, гадали,<br />
Да грядущего дали<br />
Пытали:</p>
<p style={{textAlign: 'center'}}>Что же там, за чертою?<br />
За сомнений тщетою?<br />
Что я стою?</p>
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

export default Gedicht325;
