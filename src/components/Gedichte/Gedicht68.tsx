import { Link } from 'react-router-dom';

const Gedicht67 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Порою чудные картины…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Порою чудные картины…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Порою чудные картины<br />
Перед моим проходят взором.<br />
И среди скуки и рутины<br />
Каким-то сказочным узором</p>
<p style={{textAlign: 'center'}}>Вдруг восстают дворцы и храмы<br />
Из тьмы забвения, из праха!<br />
И оживают чьи-то драмы,<br />
И кто-то корчится от страха,..</p>
<p style={{textAlign: 'center'}}>Иной от радости, восторга,<br />
Поёт, смеётся и танцует!..<br />
И шум базара, крики торга,<br />
И конь под всадником гарцует!..</p>
<p style={{textAlign: 'center'}}>И сердце мается и стонет,<br />
Тоской исходит и рыдает!!<br />
Но всё в тумане тонет, тонет…<br />
И пропадает, пропадает…</p>
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

export default Gedicht67;
