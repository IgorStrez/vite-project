import { Link } from 'react-router-dom';

const Gedicht488 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Белой гвардии
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Белой гвардии</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Мы уходим на запад,<br />
И доносится запах<br />
Тоски и печали<br />
С просторов России.<br />
А мечталось вначале!..<br />
Но солгали мессии;<br />
Но уже – отзвенело;<br />
Но уже – отгремело,<br />
Отцвело, отшумело!<br />
Сердце хлеба краюхой давно зачерствело.</p>
<p style={{textAlign: 'center'}}>Ничего не забыть, не простить – и не надо!<br />
Ничего. Кроме – ада.</p>
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

export default Gedicht488;
