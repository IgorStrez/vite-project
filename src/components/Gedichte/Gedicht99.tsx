import { Link } from 'react-router-dom';

const Gedicht99 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Армагеддон
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Армагеддон</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>И стали звон, и блеск щитов<br />
Проклятых, белых.</p>
<p style={{textAlign: 'center'}}>И визг, и лязг, и вопль врагов<br />
Оцепенелых.</p>
<p style={{textAlign: 'center'}}>И чёрным ужасом боец<br />
Ряды сминает.</p>
<p style={{textAlign: 'center'}}>И агнцы божии бегут,<br />
И доблесть тает.</p>
<p style={{textAlign: 'center'}}>И войско ангелов дрожит,<br />
Шепча молитвы;</p>
<p style={{textAlign: 'center'}}>И Он – от ярости кричит!<br />
И – грохот битвы!!</p>
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

export default Gedicht99;
