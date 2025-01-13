import { Link } from 'react-router-dom';

const Gedicht440 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> → <Link to="/gedichte">
      Мои стихи</Link> → Я один на свете белом…
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>


                <h2>Я один на свете белом…</h2>
                <br />
                
                <br />

                <div className="entry-content">
			<p style={{textAlign: 'center'}}>Я один на свете белом –<br />
Ни знакомых, ни подруг.<br />
Будто рок какой-то мелом<br />
Очертил волшебный круг,</p>
<p style={{textAlign: 'center'}}>Сквозь который – ни надежды,<br />
Ни страданья, ни сомненья!<br />
Но порой, смыкая вежды,..<br />
Нет, не боль, не сожаленья!</p>
<p style={{textAlign: 'center'}}>Просто сердце словно мозжит,<br />
Точно странного взыскует.<br />
Да сыскать никак не может;<br />
И – тоскует.</p>
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

export default Gedicht440;
