import { Link } from 'react-router-dom';

const Gedicht360 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Жить? Не трудно, а — нудно…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Жить? Не трудно, а — нудно…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Жить? Не трудно,<br />
А – нудно.<br />
Так точнее.</p>
<p style={{textAlign: 'center'}}>Безразличья короста…<br />
Всё банально и просто.<br />
И прочнее</p>
<p style={{textAlign: 'center'}}>Равнодушия вата<br />
Всех лат из булата<br />
Вместе взятых.</p>
<p style={{textAlign: 'center'}}>Чтобы выйти из роли!..<br />
Тут не хватит и боли<br />
Всех Распятых.</p>
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

export default Gedicht360;
