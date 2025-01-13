import { Link } from 'react-router-dom';

const Gedicht40 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Любовь нарывом набухает…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Любовь нарывом набухает…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Любовь нарывом набухает.<br />
Вот прорвётся и зальёт<br />
Всё кровью.</p>
<p style={{textAlign: 'center'}}>И боль пульсирует в душе и не стихает,<br />
И по нервам бьёт.<br />
И этою любовью</p>
<p style={{textAlign: 'center'}}>Я сыт уже по горло, хватит этих мук –<br />
Пора вскрывать!</p>
<p style={{textAlign: 'center'}}>Но нежное прикосновенье Ваших рук –<br />
И всё опять!</p>
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

export default Gedicht40;
