import { Link } from 'react-router-dom';

const Gedicht73 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Я не терплю фраз!..
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Я не терплю фраз!..</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Я не люблю фраз,<br />
Я не терплю поз!<br />
Но верю: предавшим хоть раз,<br />
Дорогу в страну Оз</p>
<p style={{textAlign: 'center'}}>Не отыскать уж вовек –<br />
Плата за враньё.<br />
И на руинах их мекк –<br />
Вороньё.</p>
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

export default Gedicht73;
