import { Link } from 'react-router-dom';

const Gedicht309 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Счастия не поймать…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Счастия не поймать…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Счастия не поймать,<br />
От беды не убежать,<br />
Фому убеждать<br />
Да Улиту ждать –<br />
Время только зря терять.</p>
<p style={{textAlign: 'center'}}>Так что лучше лежать,<br />
Зевать<br />
Да в потолок плевать –<br />
Чему быть,<br />
Тому не миновать.</p>
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

export default Gedicht309;
