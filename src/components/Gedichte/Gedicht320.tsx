import { Link } from 'react-router-dom';

const Gedicht320 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Нет случайностей в мире…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Нет случайностей в мире…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Нет случайностей в мире.<br />
И расплата по вире –<br />
Непреложно!</p>
<p style={{textAlign: 'center'}}>И Эринии – рядом.<br />
Под их пристальным взглядом<br />
Невозможно</p>
<p style={{textAlign: 'center'}}>Ни сфальшивить, слукавить;<br />
Ни запасец оставить:<br />
«Неплатежеспособный!»</p>
<p style={{textAlign: 'center'}}>Обойдётся – дороже.<br />
И по сердцу! по коже!<br />
Вой их. Злобный.</p>
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

export default Gedicht320;
