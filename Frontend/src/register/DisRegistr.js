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

      if (data === 'Welcome!') {
        // Handle successful login here if needed
        console.log('Login successful');
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
          <h2>Login</h2>
          <input type="text" placeholder="Логин" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleLogin}>Войти</button>
          {message && <p className="login-message">{message}</p>}
        </div>
      )}
    </div>
  );
}

export default DisRegistr;
