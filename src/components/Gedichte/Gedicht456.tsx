import { Link } from 'react-router-dom';

const Gedicht456 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Впереди — лишь туман…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Впереди — лишь туман…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Впереди – лишь туман.<br />
Даже скучно писать<br />
Про фортуны обман,<br />
Как она мне опять</p>
<p style={{textAlign: 'center'}}>Насулила тьму благ<br />
И была такова.<br />
А в итоге – лишь флаг.<br />
Остальное – слова.</p>
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

export default Gedicht456;
