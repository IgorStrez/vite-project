import { Link } from 'react-router-dom';

const Gedicht174 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Если рвать…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Если рвать…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Если рвать –<br />
То навек!<br />
Если врать –<br />
Человек</p>
<p style={{textAlign: 'center'}}>Чтобы сгинул, дурак!<br />
Понаслушавшись врак.</p>
<p style={{textAlign: 'center'}}>А то рвут –<br />
И не рвут.<br />
А то врут –<br />
И не врут.</p>
<p style={{textAlign: 'center'}}>И чтоб рыбку-то съесть!<br />
И… не сесть.</p>
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

export default Gedicht174;
