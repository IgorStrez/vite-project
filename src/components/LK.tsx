import { useAuth0 } from "@auth0/auth0-react";

const LK = () => {
  const { user, isAuthenticated, logout, loginWithRedirect, isLoading } = useAuth0();

  // Обработчик выхода
  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin, // URL для редиректа после выхода
      },
    });
  };

  // Обработчик входа (на случай, если пользователь попал сюда без авторизации)
  const handleLogin = () => {
    loginWithRedirect();
  };

  // Пока данные загружаются, показываем индикатор
  if (isLoading) {
    return <div>...</div>;
  }

  return (

    <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">

    <div style={{ padding: "20px", textAlign: "center", backgroundColor: 'white' }}>
      <h1>ЛИЧНЫЙ КАБИНЕТ</h1>
      <br /><hr></hr> <br />
      {isAuthenticated ? (
        <div>
          <h2>Я приветствую Вас, {user?.username || "Пользователь"}!</h2>
          
          <br/>
          
          
          <br />
          
          <button
            onClick={handleLogout}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#ff4d4f",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            ВЫХОД
          </button>
          <br/><br/>
        </div>
      ) : (
        <div>
          <h2>И зло и добро приходят в мир − через людей.</h2>
          <br/>
          <button
            onClick={handleLogin}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#4caf50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            ВХОД
          </button>
          <br/><br/>
        </div>
      )}
    </div>

    <div style={{ color: 'rgb(0, 0, 0)', fontFamily: 'Times New Roman, Times, serif', fontSize: '16px' }}>
        
        </div>
        <div style={{ color: 'rgb(0, 0, 0)', fontFamily: 'Times New Roman, Times, serif', fontSize: '16px' }}>
    
        </div>
      </div>
    </div>
    <div className="cwc_bot"></div>
  </div>
</div>
</div>

  );
};

export default LK;
