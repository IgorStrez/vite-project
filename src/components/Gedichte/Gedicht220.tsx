import { Link } from 'react-router-dom';

const Gedicht220 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Ничего не волнует…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Ничего не волнует…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Ничего не волнует,<br />
И это – пугает.<br />
Горе словно балует,<br />
Будто с сердцем играет.</p>
<p style={{textAlign: 'center'}}>Словно кошечка птичке:<br />
«Ну, беги!» И – в сторонку.<br />
И бежишь – по привычке.<br />
А горе – вдогонку.</p>
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

export default Gedicht220;
