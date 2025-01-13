import { Link } from 'react-router-dom';

const Gedicht112 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Андромеда
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Андромеда</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Извивы тела бесконечные…<br />
Бегут мгновенья быстротечные…<br />
Дракон уж рядом, здесь! И всё сейчас свершится.<br />
Она трепещет, молит и глаза поднять боится.</p>
<p style={{textAlign: 'center'}}>Но чу!.. Сверкнуло что-то в вышине –<br />
То всадник мчится на крылатом скакуне.<br />
Всё ближе, ближе… И умолкли девы стоны –<br />
В руках Персея грозный лик Горгоны.</p>
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

export default Gedicht112;
