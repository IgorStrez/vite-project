import { Link } from 'react-router-dom';

const Gedicht460 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Всё рушится опять…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Всё рушится опять…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Всё рушится опять,<br />
И время словно вспять<br />
Течёт.</p>
<p style={{textAlign: 'center'}}>И та же пустота,<br />
Всё с чистого листа.<br />
Влечёт</p>
<p style={{textAlign: 'center'}}>За шиворот судьба,<br />
Бормочет: «Похвальба –<br />
Не впрок!</p>
<p style={{textAlign: 'center'}}>‘Да коли захочу!..<br />
Да съем и проглочу!..’<br />
Урок!»</p>
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

export default Gedicht460;
