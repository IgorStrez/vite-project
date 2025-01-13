import { Link } from 'react-router-dom';

const Gedicht188 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Я порой ошибаюсь…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Я порой ошибаюсь…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Я порой ошибаюсь,<br />
Хоть стараюсь учиться.<br />
Но опять обжигаюсь,<br />
И может случиться –</p>
<p style={{textAlign: 'center'}}>Оловянным солдатиком!..<br />
В жарком пламени рока<br />
Вспыхну скомканным фантиком<br />
И – расплавлюсь. До срока.</p>
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

export default Gedicht188;
