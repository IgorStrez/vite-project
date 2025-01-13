import { Link } from 'react-router-dom';

const Gedicht419 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Лихо тихо кружит…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Лихо тихо кружит…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Лихо<br />
Тихо<br />
Кружит,</p>
<p style={{textAlign: 'center'}}>Глухо<br />
В ухо<br />
Жужжит:</p>
<p style={{textAlign: 'center'}}>«Не уйдёшь-ш-шь!..<br />
Пропадёш-ш-шь!..<br />
Словно вош-ш-шь<br />
Ни за грош-ш-ш…»</p>
<p style={{textAlign: 'center'}}>Ложь!!</p>
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

export default Gedicht419;
