import { Link } from 'react-router-dom';

const Gedicht421 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Эх, от ангелов-то — скука…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Эх, от ангелов-то — скука…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Эх, от ангелов-то – скука,<br />
А от демонов – томленья.<br />
Жизнь, конечно, хоть и сука,<br />
Но бывают просветленья.</p>
<p style={{textAlign: 'center'}}>Вдаль махнёт (каприз минутный!):<br />
«Огонёк!»<br />
Такая душка!<br />
И бредёшь туда, как путный.<br />
Тьфу! Пенёк!..<br />
Опять гнилушка!</p>
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

export default Gedicht421;
