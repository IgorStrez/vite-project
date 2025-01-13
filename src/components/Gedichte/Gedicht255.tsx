import { Link } from 'react-router-dom';

const Gedicht255 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Мне хочется верить!..
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Мне хочется верить!..</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Мне хочется верить,<br />
Мне хочется, хочется!..</p>
<p style={{textAlign: 'center'}}>Хоть бед – не измерить,<br />
И пусть мне пророчится</p>
<p style={{textAlign: 'center'}}>Лишь самое худшее, худшее, худшее!<br />
Но лучше я! лучше я! лучше я! лучше я!</p>
<p style={{textAlign: 'center'}}>Погибну, погрязну, погасну, увяну!<br />
Женюсь, утоплюсь иль повешуся спьяну!</p>
<p style={{textAlign: 'center'}}>Но я не смирюсь, не склонюсь пред Судьбою;<br />
Останусь – собою!</p>
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

export default Gedicht255;
