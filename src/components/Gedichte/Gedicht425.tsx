import { Link } from 'react-router-dom';

const Gedicht425 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Всё висит на волоске…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Всё висит на волоске…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Всё висит на волоске.<br />
И в тоске<br />
Наблюдаешь, как беда<br />
Чашу бедствий – «мол, вода!» –<br />
Ухмыляяся, суёт.</p>
<p style={{textAlign: 'center'}}>Только – врёт.</p>
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

export default Gedicht425;
