import { Link } from 'react-router-dom';

const Gedicht420 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Мы мечтаем о рае…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Мы мечтаем о рае…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Мы мечтаем о рае,<br />
Небесах-эмпиреях.<br />
О заоблачном крае!<br />
Даже в сущих злодеях</p>
<p style={{textAlign: 'center'}}>Эта вера – хоть тлеет,<br />
Но не гаснет ведь всё же.<br />
Каждый втайне лелеет:<br />
Что простит его Боже!</p>
<p style={{textAlign: 'center'}}>Что уж он-то!.. уж он-то!..<br />
ОСТАЛЬНЫМ – муки ада!!..<br />
Только строг ведь закон-то!<br />
По делам – и награда.</p>
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

export default Gedicht420;
