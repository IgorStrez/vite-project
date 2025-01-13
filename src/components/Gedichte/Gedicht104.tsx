import { Link } from 'react-router-dom';

const Gedicht104 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Перечитывая Данта
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Перечитывая Данта</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>“Земную жизнь пройдя до половины…”<br />
И Алигьери строгие терцины,<br />
И в бездну путь.</p>
<p style={{textAlign: 'center'}}>И мук и пыток страшные картины,<br />
И вод летейских мрачные долины,<br />
И – “умереть!.. уснуть!..”</p>
<p style={{textAlign: 'center'}}>Забыть всё!! И уснуть!..<br />
Уснуть!..<br />
И отдохнуть!</p>
<p style={{textAlign: 'center'}}>Но отдохнуть и здесь не удаётся,<br />
И Сатана в лицо тебе смеётся,<br />
И блеск костров.</p>
<p style={{textAlign: 'center'}}>И память всё никак не отпускает,<br />
И хладной Леты яд не помогает,<br />
И – львиный ров!</p>
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

export default Gedicht104;
