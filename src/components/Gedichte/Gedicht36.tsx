import { Link } from 'react-router-dom';

const Gedicht36 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Прощание с любовью
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Прощание с любовью</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Я вспоминал тебя всегда!<br />
На дне, в огне, в чаду, в аду!<br />
Когда по грудь была беда,<br />
Когда ни чести, ни стыду<br />
Уж места не было в душе!<br />
И всё равно ты там – жила!!</p>
<p style={{textAlign: 'center'}}>Теперь же… Нет тебя уже.<br />
Лишь гарь. Да пепел. Да зола.</p>
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

export default Gedicht36;
