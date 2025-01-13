import { Link } from 'react-router-dom';

const Gedicht10 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Влюблённый ангел
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Влюблённый ангел</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>«Ты знаешь, я тебя люблю<br />
Навзрыд, до муки!</p>
<p style={{textAlign: 'center'}}>Но я прошу тебя, молю –<br />
Покрепче руки!</p>
<p style={{textAlign: 'center'}}>Не размыкай, не разжимай<br />
Ни на мгновенье!</p>
<p style={{textAlign: 'center'}}>И я останусь, брошу рай!<br />
Прикосновенье</p>
<p style={{textAlign: 'center'}}>Твоё удержит, сбережёт!..<br />
Ты – мой властитель!»</p>
<p style={{textAlign: 'center'}}>Не верь, красавица, он лжёт.<br />
Он – искуситель.</p>
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

export default Gedicht10;
