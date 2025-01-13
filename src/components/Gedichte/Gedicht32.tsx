import { Link } from 'react-router-dom';

const Gedicht32 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Боль от измены…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Боль от измены…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Боль от измены варом душу обжигает.<br />
И человек её навек запоминает.<br />
И потом<br />
Любить уже боится.<br />
И открыться<br />
Решается – с большим трудом,<br />
Покой предпочитая.</p>
<p style={{textAlign: 'center'}}>Да беда,<br />
Однако, в том,<br />
Что, к сожалению, вода<br />
Не станет кровью никогда.<br />
И позже, жизнь свою листая,<br />
Что же там увидишь ты?<br />
Лишь чистые листы.</p>
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

export default Gedicht32;
