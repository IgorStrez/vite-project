import { Link } from 'react-router-dom';

const Gedicht511 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Из цикла Тюрьма, За тюремным столом…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Из цикла Тюрьма, <br />За тюремным столом…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>За тюремным столом, на суде, в автозэке<br />
Я пишу и пишу, оставляя навеки</p>
<p style={{textAlign: 'center'}}>Метки, вехи, засеки, зарубки – в чащобе<br />
Человеческой лжи. В безнадёжности, злобе</p>
<p style={{textAlign: 'center'}}>Прорубаю проход – к добродетели, к свету!..<br />
И за это – исход. И ненависть. К Поэту.</p>
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

export default Gedicht511;
