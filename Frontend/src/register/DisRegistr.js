

import React, { useState, useEffect } from 'react';
import './App.css';

function DisRegistr(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [view, setView] = useState('initial'); // initial or login
  const [message, setMessage] = useState('');
  const [isPanelVisible, setPanelVisible] = useState(false);

  const handleLoginClick = () => {
    setView('login');
  };

  const handleLogin = async () => {

    try {
      const response = await fetch('https://localhost:7045/api/AdminCredentials/GetAdminCredentials');

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      if (data) {
        if(data[0].username == username && data[0].password == password){
          props.onLogin();
          setView('profile');
        }
      } else {
        setMessage('Неправильный логин или пароль.');
      }
    } catch (error) {
      console.error('There was an error!', error);
      setMessage('Ошибка при входе.');
    }
  };

  useEffect(() => {
    const handleClick = (event) => {
      const panel = document.querySelector('.login-panel');
      const loginButton = document.querySelector('.login-button');
      if (panel && loginButton && loginButton.contains(event.target)) {
        setPanelVisible(true); // Open the login panel if the login button is clicked
      } else if (panel && !panel.contains(event.target)) {
        setPanelVisible(false); // Close the login panel if clicked outside
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [isPanelVisible, view]);

  return (
    <div className="App">
      {view === 'initial' && (
        <div className="login-initial">
          <button className="login-button" onClick={handleLoginClick}>Войти</button>
        </div>
      )}
      {view === 'login' && (
        <div className="login-panel">
          <div className="login-content">
            <input type="text" className="login-input" placeholder="Логин" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" className="login-input" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className="loginbutton" onClick={handleLogin}>Войти</button>
          </div>
          {message && <p className="login-message">{message}</p>}
        </div>
      )}
      {view === 'profile' && (
        <div className="profile">
          <button className="logout-button" onClick={() => setView('initial')}>Выйти</button>
        </div>
      )}
    </div>
  );
}

export default DisRegistr;
