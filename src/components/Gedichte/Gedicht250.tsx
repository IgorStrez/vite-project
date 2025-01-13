import { Link } from 'react-router-dom';

const Gedicht250 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Дождик сумрачно бормочет…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Дождик сумрачно бормочет…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Дождик сумрачно бормочет,<br />
Душу мочит.</p>
<p style={{textAlign: 'center'}}>Слёз теперь – хоть выжимай!<br />
Через край!</p>
<p style={{textAlign: 'center'}}>Уж сочатся из-под век,<br />
И не выплакать – вовек.</p>
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

export default Gedicht250;
