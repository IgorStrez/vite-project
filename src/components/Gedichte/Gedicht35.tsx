import { Link } from 'react-router-dom';

const Gedicht35 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Как часто любим мы друг друга…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Как часто любим мы друг друга…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Как часто любим мы друг друга<br />
Лишь потому, что злого круга<br />
Не разорвать.</p>
<p style={{textAlign: 'center'}}>И что кругом всё те же лица,<br />
И никогда не встретить принца,<br />
И не порвать</p>
<p style={{textAlign: 'center'}}>Цепей обыденности, прозы.<br />
И уж давно увяли розы<br />
Твоей мечты.</p>
<p style={{textAlign: 'center'}}>«Ах, как она… неидеальна!..<br />
И заурядна, и банальна!»<br />
А ты?! А ты?!</p>
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

export default Gedicht35;
