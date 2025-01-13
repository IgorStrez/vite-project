import { Link } from 'react-router-dom';

const Gedicht24 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Я, наверно, не вернусь…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Я, наверно, не вернусь…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Я, наверно, не вернусь<br />
И тебе уж не приснюсь<br />
Никогда.</p>
<p style={{textAlign: 'center'}}>Я бы, может, и рискнул,<br />
И рукой на всё махнул!..<br />
Да звезда,</p>
<p style={{textAlign: 'center'}}>Та, которая вела,<br />
Та, которая звала, –<br />
Умерла.</p>
<p style={{textAlign: 'center'}}>Значит – некуда идти.<br />
Значит!.. Ладно, не грусти.<br />
Всё – дотла.</p>
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

export default Gedicht24;
