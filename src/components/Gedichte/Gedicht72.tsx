import { Link } from 'react-router-dom';

const Gedicht72 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Я б поставил последний крест…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Я б поставил последний крест…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Я б поставил последний крест,<br />
Только нет уж на сердце мест<br />
Для крестов.</p>
<p style={{textAlign: 'center'}}>На надежде, на вере, на!..<br />
Пустота там теперь одна.<br />
Из мостов,</p>
<p style={{textAlign: 'center'}}>Что сгорели давным-давно,<br />
Дом бы можно построить! Но…<br />
Урок!</p>
<p style={{textAlign: 'center'}}>А вообще, полно скулить!<br />
Беды, что ли, начать солить<br />
Впрок?</p>
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

export default Gedicht72;
