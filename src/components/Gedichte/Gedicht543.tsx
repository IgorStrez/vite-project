import { Link } from 'react-router-dom';

const Gedicht543 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Вчера и сегодня
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Вчера и сегодня</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>1.</p>
<p style={{textAlign: 'center'}}>Нимфы и сатиры,<br />
ПастушкИ-пастУшки.<br />
Ведьмы да вампиры,<br />
Парики да мушки.</p>
<p style={{textAlign: 'center'}}>Всё одно и то же!<br />
Разны лишь обличья.<br />
Из травы ли ложе!..<br />
Похоть!! Сквозь… «приличья».</p>
<p style={{textAlign: 'center'}}>2.</p>
<p style={{textAlign: 'center'}}>Раньше – дамы-кавалеры,<br />
Нынче бабы – сплошь мегеры.</p>
<p style={{textAlign: 'center'}}>А какие ж «кавалеры»<br />
Для – мегеры??!!</p>
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

export default Gedicht543;
