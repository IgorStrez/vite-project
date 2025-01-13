import { Link } from 'react-router-dom';

const Gedicht314 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Лодочка плывёт, на волнах качается…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Лодочка плывёт, на волнах качается…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Лодочка плывёт,<br />
на волнах качается.<br />
Жизнь моя течёт,<br />
всё никак не кончается.<br />
Счастье птицей<br />
ввысь взмывает,<br />
Горе лисицей<br />
по земле стелется.</p>
<p style={{textAlign: 'center'}}>Не уйти, пожалуй, птичке-то?..<br />
Впрочем, всё перемелется.<br />
Перебесится, устаканится;<br />
Ничего, ничего, ничего не останется.<br />
Ни-че-го.</p>
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

export default Gedicht314;
