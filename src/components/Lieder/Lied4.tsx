import { Link } from 'react-router-dom';


const Lied4 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/lieder">
      Песни</Link> → Цикл песен "Ромео и Джульетта"
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Цикл песен "Ромео и Джульетта"</h2>
                <br />
                
                <br />

               <p>История написания этих песен довольно любопытная.<br />
Мне всегда очень нравилась песня Nino Rota из к/ф "Ромео и Джульетта"<br />
(старого, разумеется, с Olivia Hussey). Ну, и как-то я слова решил написать. <br />(Русского варианта-то нет!)<br />
Написал. Мало того, попросил через знакомых певца одного напеть.<br />
<br />
Тот напел, но сказал, что это-де не оригинальная мелодия, а какая-то вариация, и хорошо бы именно на оригинальную мелодию слова написать.<br />
<br />
Я - написал. Но выяснилось, что и эта новая мелодия,<br />
на которую я написал - тоже какая-то вариация! Пришлось писать и третий вариант...<br />
<br />
Так появились эти три песни. С певцом чего-то больше не заладилось, поэтому поздние варианты - я уж сам... "пою".<br />
Причём для певца пел - поэтому небрежно достаточно.Надеюсь, публика меня простит.<br />
<br />
P.S. В профессиональном исполнении "Любовь и смерть" я не выкладываю, поскольку обещал исполнителю этого не делать.</p>
<br />

                        <div style={{ textAlign: 'center'}}><strong>
                        <Link to="/lieder/lied401" className="yellow-underline" style={{ fontSize: '33px' }}>"Любовь и смерть"</Link><br /><br /><br />
                        <Link to="/lieder/lied402" className="yellow-underline" style={{ fontSize: '33px' }}>"Ромео и Джульетта — 1"</Link><br /><br /><br />
                        <Link to="/lieder/lied403" className="yellow-underline" style={{ fontSize: '33px' }}>"Ромео и Джульетта — 2"</Link><br /><br /><br /></strong>
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

export default Lied4;
