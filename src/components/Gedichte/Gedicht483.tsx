import { Link } from 'react-router-dom';

const Gedicht483 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Людям
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Людям</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Заливает всё вокруг – свет.<br />
И спасенья нигде – нет.<br />
И бег – только лишь в никуда.<br />
И никогда<br />
Не устанет кружить беда.<br />
И звезда,<br />
Та, что «светила всегда»,<br />
Погасла уже давно –<br />
Уксус, а не вино!<br />
И дно<br />
Может, у чаши бедствий видно,<br />
Но!<br />
Хватит на твой век.<br />
Ибо ты – человек.</p>
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

export default Gedicht483;
