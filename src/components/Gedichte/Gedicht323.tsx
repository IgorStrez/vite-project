import { Link } from 'react-router-dom';

const Gedicht323 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Когда мне было тяжело…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Когда мне было тяжело…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Когда мне было тяжело,<br />
И в море бедствий я тонул,<br />
Ты улыбнулся мне светло<br />
И тотчас руку протянул.</p>
<p style={{textAlign: 'center'}}>И, задрожав, – ведь никогда<br />
Не знал я помощи ничьей –<br />
Простил я миру всё тогда!..<br />
Но камень был в руке твоей.</p>
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

export default Gedicht323;
