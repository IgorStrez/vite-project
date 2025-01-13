import { Link } from 'react-router-dom';

const Gedicht94 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Проклятие Демона
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Проклятие Демона</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Когда бы у меня достало сил,<br />
О, как же я бы отомстил!</p>
<p style={{textAlign: 'center'}}>Я мир бы этот утопил,<br />
залил!..<br />
И так бы только утолил!..</p>
<p style={{textAlign: 'center'}}>И жаль, что я пока…<br />
И пусть печать крепка,</p>
<p style={{textAlign: 'center'}}>Но помните: пройдут века,<br />
И в вашей Библии проклятой та строка</p>
<p style={{textAlign: 'center'}}>Набухнет, замерцает кровью! И раздастся вой и стон:<br />
Армагеддон!!!</p>
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

export default Gedicht94;
