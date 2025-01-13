import { Link } from 'react-router-dom';

const Gedicht203 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Судьба находит щели…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Судьба находит щели…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Судьба находит щели<br />
И сразу же разит.</p>
<p style={{textAlign: 'center'}}>И сразу – точно к цели!<br />
Не ждёт и не грозит.</p>
<p style={{textAlign: 'center'}}>Удар, укол – и рана.<br />
И кровь из-под доспех.</p>
<p style={{textAlign: 'center'}}>И мужества – ни грана.<br />
Ни шанса на успех!</p>
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

export default Gedicht203;
