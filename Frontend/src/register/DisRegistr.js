import React, { useState } from 'react';
import './App.css';

function DisRegistr() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [view, setView] = useState('initial'); // initial or login
  const [message, setMessage] = useState('');

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

  return (
    <div className="App">
      {view === 'initial' && (
        <div className="login-initial">
          <button className="login-button" onClick={handleLoginClick}>Войти</button>
        </div>
      )}
      {view === 'login' && (
        <div className="login">
          <input type="text" class="login-input" placeholder="Логин" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" class="login-input" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleLogin}>Войти</button>
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
