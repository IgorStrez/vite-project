import { Link } from 'react-router-dom';

const Gedicht416 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Рыцарь тьмы или света?..
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Рыцарь тьмы или света?..</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Рыцарь тьмы или света?<br />
И, хотя я про это<br />
Писал,</p>
<p style={{textAlign: 'center'}}>Всё же сердце – тоскует,<br />
Плачет, алчет, взыскует!..<br />
Похвал?..</p>
<p style={{textAlign: 'center'}}>Осуждений, проклятий?..<br />
Не терплю ни заклятий,<br />
Ни молитв!</p>
<p style={{textAlign: 'center'}}>Но – глаза лишь прикрою,<br />
И – волшебной игрою…<br />
Грохот битв!!</p>
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

export default Gedicht416;
