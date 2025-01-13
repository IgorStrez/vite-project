import { Link } from 'react-router-dom';

const Gedicht231 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Как хочется счастья!..
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Как хочется счастья!..</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Как хочется счастья,<br />
Как хочется веры!<br />
Любви и участья<br />
Без края, без меры!..<br />
Химеры.</p>
<p style={{textAlign: 'center'}}>Мы жаждем – добиться,<br />
Мечтаем – домчаться!<br />
Забыться, забиться!..<br />
Порыву поддаться!!<br />
И – сдаться.</p>
<p style={{textAlign: 'center'}}>На милость врага.<br />
Только ждать ли пощады?<br />
Судьба-то строга!<br />
И какой же награды<br />
Заслужит смиренье?<br />
Презренья!</p>
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

export default Gedicht231;
