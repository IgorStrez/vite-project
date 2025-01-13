import { Link } from 'react-router-dom';

const Gedicht389 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Жизнь какая-то пустая…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Жизнь какая-то пустая…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Жизнь какая-то пустая,<br />
Беспонтовая.<br />
Точно галок кружит стая<br />
Бестолковая.</p>
<p style={{textAlign: 'center'}}>И чего им, глупым, нужно,<br />
Сами знают?<br />
Но орут чего-то дружно!<br />
Но – летают.</p>
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

export default Gedicht389;
