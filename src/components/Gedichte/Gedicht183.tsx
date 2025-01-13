import { Link } from 'react-router-dom';

const Gedicht183 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → В бездну вместе…

      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>В бездну вместе…
                </h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>В бездну вместе,<br />
Друг за другом,<br />
Честь по чести,<br />
Круг за кругом<br />
Мы спускаемся с тобой</p>
<p style={{textAlign: 'center'}}>Той тропой,<br />
По которой – только тени.<br />
И бегут, бегут ступени<br />
Под ногой.</p>
<p style={{textAlign: 'center'}}>И – растёт в душе тревога.<br />
Но зовёт, зовёт дорога<br />
За собой.</p>
<p style={{textAlign: 'center'}}>Тише, тише!<br />
Ниже, ниже!<br />
Шум всё глуше,<br />
И всё ближе<br />
Чудный град.<br />
Рай иль ад?</p>
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

export default Gedicht183;
