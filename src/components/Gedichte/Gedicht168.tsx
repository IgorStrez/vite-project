import { Link } from 'react-router-dom';

const Gedicht168 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Сквозь вечности время…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Сквозь вечности время…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Сквозь вечности время,<br />
Сквозь холод пространства<br />
То благо, то бремя!<br />
То строгость спартанства,<br />
То нега Востока,<br />
Разврат Вавилона,<br />
Журчанье потока,<br />
Порыв аквилона!..</p>
<p style={{textAlign: 'center'}}>Врываются в сны –<br />
На мгновенье.<br />
И жажда весны!<br />
Обновленья!</p>
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

export default Gedicht168;
