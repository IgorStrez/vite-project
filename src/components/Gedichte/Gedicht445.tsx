import { Link } from 'react-router-dom';

const Gedicht445 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Уже до упора!..
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Уже до упора!..</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Уже – до упора!!<br />
И, может быть, скоро…<br />
Кто знает!..</p>
<p style={{textAlign: 'center'}}>В далёкие дали.<br />
И – только видали!..<br />
Карает</p>
<p style={{textAlign: 'center'}}>Судьба за безволье.<br />
А за своеволье –<br />
Тем паче.</p>
<p style={{textAlign: 'center'}}>И носом всё тычет!<br />
А сердце талдычет –<br />
О… сдаче…</p>
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

export default Gedicht445;
