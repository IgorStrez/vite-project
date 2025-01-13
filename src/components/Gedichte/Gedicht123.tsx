import { Link } from 'react-router-dom';

const Gedicht123 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Из цикла Собор Парижской Богоматери, Священник
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Из цикла Собор Парижской Богоматери, Священник</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>О Боже, Боже, помоги мне!<br />
Я погибаю!</p>
<p style={{textAlign: 'center'}}>В груди бушует адский пламень –<br />
Я в нём сгораю.</p>
<p style={{textAlign: 'center'}}>Терзают душу словно крючья<br />
И рвут на части.</p>
<p style={{textAlign: 'center'}}>О Боже, нет! Оставь, не мучай!<br />
В Твоей я власти.</p>
<p style={{textAlign: 'center'}}>Спаси, молю я! Защити!<br />
Помилуй, Боже!</p>
<p style={{textAlign: 'center'}}>И Эсмеральду! И её!<br />
Помилуй тоже!</p>
<p style={{textAlign: 'center'}}>И пусть пропал я навсегда –<br />
В том нет сомнений.</p>
<p style={{textAlign: 'center'}}>За взгляд её я рай отдам –<br />
Без сожалений!</p>
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

export default Gedicht123;
