import { Link } from 'react-router-dom';

const Gedicht490 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Гусары не бывают стары…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Гусары не бывают стары…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Гусары не бывают стары<br />
И не становятся седыми.<br />
Они не пишут мемуары,<br />
А умирают – молодыми.</p>
<p style={{textAlign: 'center'}}>Звон стали, ржанье, конский топот!..<br />
Тел мешанина, пули свищут!..<br />
И крик людей, и пушек грохот!..<br />
И всё обрящет тот, кто ищет.</p>
<p style={{textAlign: 'center'}}>И всё получат – всем по серьгам<br />
В бою достанется – всем сёстрам.<br />
Удар клинка… Свинец под сердцем…<br />
Конец! Сомненьям и вопросам.</p>
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

export default Gedicht490;
