import { Link } from 'react-router-dom';

const Gedicht180 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Судьба, судьба!..
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Судьба, судьба!..</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Судьба, судьба!<br />
Победа – далеко,<br />
В какой-то дымке.</p>
<p style={{textAlign: 'center'}}>Борьба, борьба!..<br />
Но ах, как нелегко!<br />
Одне ошибки.</p>
<p style={{textAlign: 'center'}}>И – ничего не изменить и не исправить.<br />
Коней уж не сменить, хоть трудно править;<br />
И не хватает даже сил их удержать!..<br />
Но – должно продолжать.</p>
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

export default Gedicht180;
