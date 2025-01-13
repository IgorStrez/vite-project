import { Link } from 'react-router-dom';

const Gedicht12 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Олеся
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Олеся</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>“Прощай, любимый, не судьба!” –<br />
Она шептала, торопясь.</p>
<p style={{textAlign: 'center'}}>И лоб горел, и жизнь рвалась,<br />
И вспоминалась ворожба.</p>
<p style={{textAlign: 'center'}}>Она всё знала наперёд –<br />
Одни лишь беды рок сулил.</p>
<p style={{textAlign: 'center'}}>Что он уйдёт, любовь уйдёт…<br />
А удержать – не хватит сил.</p>
<p style={{textAlign: 'center'}}>“Прощай, мой миленький, прощай!<br />
Я убегаю в никуда.</p>
<p style={{textAlign: 'center'}}>Нет-нет! Не плачь, не осуждай!<br />
Лишь вспоминай хоть иногда</p>
<p style={{textAlign: 'center'}}>Свою Олесю. Но – пора!<br />
Так будет лучше. Уж поверь”.</p>
<p style={{textAlign: 'center'}}>И озирается она –<br />
И бусы вешает на дверь.</p>
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

export default Gedicht12;
