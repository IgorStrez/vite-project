import { Link } from 'react-router-dom';

const Gedicht170 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Сквозь бесконечные миры…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Сквозь бесконечные миры…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Сквозь бесконечные миры<br />
Прекрасной, дьявольской игры<br />
Кусочки</p>
<p style={{textAlign: 'center'}}>Ко мне доносятся подчас;<br />
И я ловлю, за разом раз,<br />
То строчки,</p>
<p style={{textAlign: 'center'}}>То рифм прекрасных череда,<br />
Невнятный ропот.</p>
<p style={{textAlign: 'center'}}>В них веет ветр, журчит вода,..<br />
В них – жизни рокот!</p>
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

export default Gedicht170;
