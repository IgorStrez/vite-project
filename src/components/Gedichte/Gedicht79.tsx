import { Link } from 'react-router-dom';

const Gedicht79 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Любая красота рождается из пены…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Любая красота рождается из пены…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Любая красота рождается из пены –<br />
житейской иль морской.<br />
И из событий – волн неутомимой смены,<br />
на первый взгляд докучной и пустой.</p>
<p style={{textAlign: 'center'}}>Бессмертная строка,<br />
звучащая потом века, –<br />
Из суеты мирской.</p>
<p style={{textAlign: 'center'}}>Прибой, прибой, прибой!..</p>
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

export default Gedicht79;
