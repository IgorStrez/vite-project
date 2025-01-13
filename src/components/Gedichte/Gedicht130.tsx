import { Link } from 'react-router-dom';

const Gedicht130 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Гамлет-5
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Гамлет-5</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Нет ни мрака, ни света;<br />
Ни вопроса, ответа…<br />
Ничего нет на свете!</p>
<p style={{textAlign: 'center'}}>Только небыль да нежить.<br />
И заре не забрезжить,<br />
И комете</p>
<p style={{textAlign: 'center'}}>Никогда не сорваться.<br />
И не стоит соваться<br />
и пытаться прорваться<br />
В никуда ниоткуда.</p>
<p style={{textAlign: 'center'}}>Нет ни веры, ни чуда.<br />
Лишь – Гертруда…</p>
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

export default Gedicht130;
