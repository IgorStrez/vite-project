import { Link } from 'react-router-dom';

const Gedicht3 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Ангел грешный, ангел мой…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Ангел грешный, ангел мой…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Ангел грешный, ангел мой!<br/>
Захвати меня с собой,<br/>
Унеси меня домой –<br/>
Там сокрой.</p>
<p style={{textAlign: 'center'}}>Над широкою рекой,<br/>
Над текучею водой<br/>
Ты мне песенку пропой –<br/>
Успокой.</p>
<p style={{textAlign: 'center'}}>Что, мол, горе не беда;<br/>
Что надежда есть всегда.<br/>
И от кривды нет вреда –<br/>
Иногда.</p>
<p style={{textAlign: 'center'}}>Что, мол, скоро, скоро, брат!<br/>
Мы прибудем в дивный град,<br/>
Где нам всякий будет рад –<br/>
Прямо в ад.</p>
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

export default Gedicht3;
