import { Link } from 'react-router-dom';

const Gedicht160 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Мечты сгорают, как дрова…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Мечты сгорают, как дрова…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Мечты сгорают, как дрова<br />
В камине.</p>
<p style={{textAlign: 'center'}}>В душе звучат ещё слова,<br />
Поныне!</p>
<p style={{textAlign: 'center'}}>Но исчезает аромат –<br />
С годами.</p>
<p style={{textAlign: 'center'}}>И от бесчисленных армад –<br />
Лишь знамя.</p>
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

export default Gedicht160;
