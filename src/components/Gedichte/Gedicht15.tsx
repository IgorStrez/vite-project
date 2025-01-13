import { Link } from 'react-router-dom';

const Gedicht15 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Принцессы да сказки…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Принцессы да сказки…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Принцессы да сказки –<br />
Одни лишь обманы!<br />
Всего только маски.<br />
Дурманы, дурманы, дурманы, дурманы…</p>
<p style={{textAlign: 'center'}}>Мечтаешь – о боже!<br />
Ан снова – кошмары.<br />
Одно всё и то же,<br />
Лишь мары, и мары, и мары, и мары…</p>
<p style={{textAlign: 'center'}}>К утру – либо тают,<br />
Иль, в ведьм превращаясь,<br />
Смеясь – улетают;<br />
Навеки прощаясь, прощаясь, прощаясь, прощаясь…</p>
<p style={{textAlign: 'center'}}>И сердца частицу<br />
С собой забирают.<br />
Иль мёртвому принцу<br />
Вот так, по крупицам, сбирают, сбирают, сбирают, сбирают?..</p>
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

export default Gedicht15;
