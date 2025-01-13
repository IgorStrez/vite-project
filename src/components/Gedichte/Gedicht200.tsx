import { Link } from 'react-router-dom';

const Gedicht200 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Мы не верим друг другу…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Мы не верим друг другу…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Мы не верим друг другу<br />
И, как пони по кругу,<br />
Всё бежим и бежим.</p>
<p style={{textAlign: 'center'}}>От измены к измене,<br />
От потери к потере<br />
Всё спешим и спешим.</p>
<p style={{textAlign: 'center'}}>Торопясь, задыхаясь,<br />
О любовь спотыкаясь,<br />
О веру и честь:</p>
<p style={{textAlign: 'center'}}>«А!.. Всё чушь! Всё обманы!<br />
Этой соли на раны<br />
Сколько было – не счесть.</p>
<p style={{textAlign: 'center'}}>Хватит, мы уж не дети!..»<br />
И за это ответим<br />
Перед Господом мы.</p>
<p style={{textAlign: 'center'}}>От измены к измене,<br />
От потери к потере –<br />
Путь от света до тьмы.</p>
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

export default Gedicht200;
