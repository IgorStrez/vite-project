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
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Личный кабинет</h2>
      {isAuthenticated ? (
        <div>
          <h2>Я приветствую Вас, {user?.name || "Пользователь"}!</h2>
          
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
        </div>
      ) : (
        <div>
          <p>А кто Вы такой?</p>
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
        </div>
      )}
    </div>
  );
};

export default LK;
