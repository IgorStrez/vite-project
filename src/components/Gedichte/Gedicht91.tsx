import { Link } from 'react-router-dom';

const Gedicht91 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Каждый демон — ангел бывший…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Каждый демон — ангел бывший…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Каждый демон –<br />
Ангел бывший,<br />
Сладкий сон<br />
Давно забывший.</p>
<p style={{textAlign: 'center'}}>Где вы, прошлые святыни:<br />
Псалмы, свечки да молитвы?<br />
Но звучит в душе поныне –<br />
Грохот битвы!!</p>
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

export default Gedicht91;
