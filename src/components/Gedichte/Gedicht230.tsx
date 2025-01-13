import { Link } from 'react-router-dom';

const Gedicht230 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Аутодафе
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Аутодафе</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>1</p>
<p style={{textAlign: 'center'}}>В средневековье меня бы сожгли как еретика.<br />
Ныне же терпят. Пока.</p>
<p style={{textAlign: 'center'}}>2</p>
<p style={{textAlign: 'center'}}>Меня не надо сжигать,<br />
Я сгорю и сам.<br />
И вам<br />
Останется лишь наблюдать,<br />
Как, то тлеют едва-едва,<br />
То вспыхивают иногда,<br />
словно сухая трава,<br />
чувства.<br />
Рассыпая слова,<br />
слова,<br />
слова…</p>
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

export default Gedicht230;
