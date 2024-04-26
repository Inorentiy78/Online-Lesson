import React, { useState, useEffect } from 'react';
import './App.css';


function DisRegistr() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [view, setView] = useState('initial'); // initial or login
  const [message, setMessage] = useState('');
  const [isPanelVisible, setPanelVisible] = useState(false);

  const handleLoginClick = () => {
    setView('login');
  };

  const handleLogin = async () => {
    const user = { username, password };

    try {
      const response = await fetch('http://localhost:5236/api/User/Login/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Assuming the response is text
      const data = await response.text();

      if (data === 'Success') {
        // Handle successful login here
        setView('profile');
      } else {
        setMessage('Неправильный логин или пароль.');
      }
    } catch (error) {
      console.error('There was an error!', error);
      setMessage('Ошибка при входе.');
    }
  };
  useEffect(() => {
    // Обработчик клика на весь документ
    const handleClickOutside = (event) => {
      const panel = document.getElementById('loginPanel');
      if (panel && !panel.contains(event.target)) {
        setPanelVisible(false);
      }
    };

    // Добавляем обработчик только при открытой панели
    if (isPanelVisible) {
      document.addEventListener('click', handleClickOutside);
    }

    // Очищаем обработчик при размонтировании компонента или закрытии панели
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isPanelVisible]);

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
            <button  className="loginbutton" onClick={handleLogin}>Войти</button>
          </div>
          {message && <p className="login-message">{message}</p>}
        </div>
      )}
      {view === 'profile' && (
        <div className="profile">
          <img src="path_to_profile_image" alt="Profile" className="profile-icon" />
          <button className="logout-button" onClick={() => setView('initial')}>Выйти</button>
        </div>
      )}
    </div>
  );
}

export default DisRegistr;
