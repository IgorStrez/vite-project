import { Link } from 'react-router-dom';

const Gedicht432 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Усталость, усталость, усталость, усталость…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Усталость, усталость, усталость, усталость…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Усталость, усталость, усталость, усталость!<br />
До самого сердца почти что добралась.<br />
Осталась<br />
Лишь самая малость.</p>
<p style={{textAlign: 'center'}}>Ну, как так случилось,<br />
Ну, как оказалось,<br />
Что листьями всё разлетелось,<br />
куда-то умчалось!..<br />
А тоже – хотелось, мечталось!..</p>
<p style={{textAlign: 'center'}}>Но – не досказалось, и – не доигралось!<br />
Лишь слабость да вялость.<br />
Да жалость.<br />
Вот всё – что досталось.<br />
Усталость, усталость, усталость…</p>
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

export default Gedicht432;
