import { Link } from 'react-router-dom';

const Gedicht234 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Сполохи вечности душу тревожат…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Сполохи вечности душу тревожат…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Сполохи вечности душу тревожат,<br />
Сердце волнуют.<br />
То ли морочат, то ли ворожат,<br />
То ли тоскуют.</p>
<p style={{textAlign: 'center'}}>Будто беззвучно о чём-то кричат,<br />
Словно стонут:<br />
«Где же ты?! Где?.. Наш потерянный брат?»<br />
Но потонут</p>
<p style={{textAlign: 'center'}}>Зовы все эти в мелькании дней –<br />
Ни следочка!<br />
Вот уж и сердце ровней и ровней…<br />
Вот и – точка!</p>
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

export default Gedicht234;
