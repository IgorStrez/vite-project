import { Link } from 'react-router-dom';

const Gedicht16 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Кошка
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Кошка</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Женщина, как кошка, –<br />
Требует вниманья.<br />
Ласки хоть немножко,<br />
Шарма, обаянья!..</p>
<p style={{textAlign: 'center'}}>Гладишь – ей приятно,<br />
Ластится, мурлычет…<br />
Ну, кормить – понятно.<br />
Иногда похнычет:</p>
<p style={{textAlign: 'center'}}>Дескать, мне взгрустнулось.<br />
А с чего, спросите?<br />
Вот и улыбнулась!<br />
Только поманите.</p>
<p style={{textAlign: 'center'}}>Только похвалите:<br />
Ах, какие глазки!<br />
Только назовите<br />
Феею из сказки.</p>
<p style={{textAlign: 'center'}}>Женщина, как кошка, –<br />
Требует вниманья.<br />
Ласки хоть немножко,<br />
Такта, обаянья…</p>
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

export default Gedicht16;
