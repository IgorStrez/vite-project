import { Link } from 'react-router-dom';

const Gedicht444 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → В этом долбаном мире…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>В этом долбаном мире…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>В этом долбаном мире<br />
Дважды два лишь четыре,<br />
Всего-то.</p>
<p style={{textAlign: 'center'}}>И хоть лопни и тресни,<br />
А пропеты все песни!<br />
И нота</p>
<p style={{textAlign: 'center'}}>Уж последняя смолкла.<br />
И за вечность прогоркла<br />
Вся вера:</p>
<p style={{textAlign: 'center'}}>Дескать, что-то когда-то!..<br />
Да оставьте, ребята!<br />
Химера.</p>
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

export default Gedicht444;
