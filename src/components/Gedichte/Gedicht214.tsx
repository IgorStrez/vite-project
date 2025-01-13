import { Link } from 'react-router-dom';

const Gedicht214 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Я всё могу представить…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Я всё могу представить…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Я всё могу представить: что я Бог,<br />
И что Вселенная – у ног!<br />
Что пальцем шевельну – и рушатся миры.<br />
И демоны в Аду – всего лишь комары,<br />
Повержен Сатана – и всё благополучно,<br />
И ангелы при мне пасутся неотлучно!..</p>
<p style={{textAlign: 'center'}}>А мне – смертельно скучно.</p>
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

export default Gedicht214;
