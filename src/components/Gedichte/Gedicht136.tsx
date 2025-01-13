import { Link } from 'react-router-dom';

const Gedicht136 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Тайна Пушкина
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Тайна Пушкина</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>О чём он пел? Да ни о чём!<br />
Как все поэты.</p>
<p style={{textAlign: 'center'}}>Но КАК он пел! Вот дело в чём.<br />
Вот где ответы.</p>
<p style={{textAlign: 'center'}}>Его стихи? Да чепуха! Да безделушки!<br />
Но – безупречны. Но – легки. Богов – игрушки.</p>
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

export default Gedicht136;
