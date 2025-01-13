import { Link } from 'react-router-dom';

const Gedicht14 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Оплавляются души…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Оплавляются души…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Оплавляются души.<br />
И болью – как воском.<br />
И – в подушку, тайком!<br />
Чтобы стоны – поглуше.</p>
<p style={{textAlign: 'center'}}>И огонь от свечи<br />
То дрожит, то танцует.<br />
И – ни звука в ночи.<br />
Словно время тоскует</p>
<p style={{textAlign: 'center'}}>Тоже вместе с тобой,<br />
Тоже вместе страдает!<br />
И свечой восковой<br />
Истекает, рыдает!..</p>
<p style={{textAlign: 'center'}}>Но – биение крыл,<br />
Мотылька трепетанье.<br />
И – забыл! И – застыл!..<br />
Миг! И снова молчанье.</p>
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

export default Gedicht14;
