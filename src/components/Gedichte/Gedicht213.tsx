import { Link } from 'react-router-dom';

const Gedicht213 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Всё, конечно, случится…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Всё, конечно, случится…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Всё, конечно, случится;<br />
Всё, конечно, свершится.<br />
И беда постучится,<br />
С тоской скорешится.</p>
<p style={{textAlign: 'center'}}>И припрутся однажды две суки;<br />
«Открывай!!» – заорут, подвывая.<br />
И начнутся тут казни да муки!<br />
Ведь едва я, спросонья зевая…</p>
<p style={{textAlign: 'center'}}>Стоп! Не стоит, пожалуй, о прочем.<br />
А не то – напророчим.</p>
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

export default Gedicht213;
