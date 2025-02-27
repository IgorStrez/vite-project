import { Link } from 'react-router-dom';

const Zombi1 = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      <Link to="/">Главная страница</Link> → <Link to="/kinotheater">KinoTheater LUZIFER</Link> → <Link to="/kinotheater/zombi">
      ZОМБИ</Link> → Zомби
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
           
          <div className="post-body entry-content">
              <div style={{backgroundColor: 'rgb(255, 255, 255)',}}>

                <h2>Zомби</h2>
                <br /><hr></hr><br/>
                <div className="entry-content">
            
                <div style={{ position: "relative", paddingTop: "56.25%", width: "100%" }}>
                <iframe
                    src="https://player.vimeo.com/video/1059240860?h=e973ffba22&badge=0&autopause=0&player_id=0&app_id=58479"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                    title="Сериал «ZОМБИ», Сергей Мавроди"
                ></iframe>
                </div>
                <br /><hr></hr><br/>
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

export default Zombi1;

