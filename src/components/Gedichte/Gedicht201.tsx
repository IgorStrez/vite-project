import { Link } from 'react-router-dom';

const Gedicht201 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Не верь ни в сказки, ни в мечты…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Не верь ни в сказки, ни в мечты…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Не верь ни в сказки, ни в мечты,<br />
Ни в честь, ни в совесть, ни в любовь.<br />
Не верь соблазнам Красоты –<br />
Не заблуждайся вновь и вновь.</p>
<p style={{textAlign: 'center'}}>Всегда обмана ожидай,<br />
И сам обманывай и лги.<br />
Ошибок ближним не прощай,<br />
Друзьям не возвращай долги.</p>
<p style={{textAlign: 'center'}}>И, проходя земной свой путь,<br />
Свершая круг – будь только рад!<br />
И о награде не забудь –<br />
Тебя с восторгом встретит Ад!</p>
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

export default Gedicht201;
