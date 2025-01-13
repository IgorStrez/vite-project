import { Link } from 'react-router-dom';

const Gedicht550 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Мы все ленивы и слабы…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Мы все ленивы и слабы…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>
Мы все ленивы и слабы<br />
И неуверены в себе.<br />
Да все мы, в сущности, рабы!<br />
И, покоряяся судьбе,</p>

<p style={{textAlign: 'center'}}>
Бредём уныло, как во сне,<br />
Из ниоткуда – в никуда.<br />
Не расцветая – по весне,<br />
Не просыпаясь – никогда.</p>

<p style={{textAlign: 'center'}}>
И лишь дремоты – полубред.<br />
Полутуман да полумгла.<br />
А позади – на много лет:<br />
Зола, зола, зола, зола...</p>
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

export default Gedicht550;
