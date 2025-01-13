import { Link } from 'react-router-dom';

const Gedicht509 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Из цикла Тюрьма, Здесь не люди, а спички…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Из цикла Тюрьма, <br />Здесь не люди, а спички…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Здесь не люди, а спички.<br />
Их ломают небрежно.<br />
И закрыты кавычки;<br />
И, увы, неизбежно –<br />
По ступеням всё ниже…<br />
до самого края…</p>
<p style={{textAlign: 'center'}}>До – рая!</p>
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

export default Gedicht509;
