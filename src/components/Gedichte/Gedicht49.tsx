import { Link } from 'react-router-dom';

const Gedicht49 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Ты умерла лет сто назад…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Ты умерла лет сто назад…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Ты умерла лет сто назад!<br />
Я ж – припозднился.<br />
Да вот, ей-богу, сам не рад,<br />
Зачем родился?</p>
<p style={{textAlign: 'center'}}>Когда тебя исчез и след<br />
На этом свете!<br />
А впрочем, всё: и явь, и бред –<br />
Потонут. В Лете.</p>
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

export default Gedicht49;
