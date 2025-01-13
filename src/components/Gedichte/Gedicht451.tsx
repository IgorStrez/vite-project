import { Link } from 'react-router-dom';

const Gedicht451 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Сердце ноет — горе чует…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Сердце ноет — горе чует…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Сердце ноет –<br />
Горе чует.<br />
Ветер воет,<br />
Ветер дует</p>
<p style={{textAlign: 'center'}}>Из-за Огненной Горы,<br />
Из-под змеевой норы.</p>
<p style={{textAlign: 'center'}}>Где шеломы да доспехи –<br />
Богатырские утехи,<br />
Молодецкие потехи…</p>
<p style={{textAlign: 'center'}}>Что же сталось с тех затей?<br />
Всех пожрал проклятый змей!</p>
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

export default Gedicht451;
