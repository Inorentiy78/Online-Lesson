import React, { useState } from 'react';



function DisRegistr() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fio, setFio] = useState('');
  const [age, setAge] = useState(0);
  const [view, setView] = useState('initial'); // initial, login, register, or welcome
  const [message, setMessage] = useState('');
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [contentVisible, setContentVisible] = useState(false);

  const handleLoginClick = () => {
    setView(view === 'login' ? 'initial' : 'login');
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

      const data = await response.text(); // Assuming the response is text

      if (data === 'Welcome!') {
        setWelcomeMessage(`Добро пожаловать, ${fio}!`);
        setView('welcome');
        setContentVisible(true);
      } else {
        setMessage('Неправильный логин или пароль.');
      }
    } catch (error) {
      console.error('There was an error!', error);
      setMessage('Ошибка при входе.');
    }
  };

  const handleRegister = async () => {
    const user = { username, fio, age, password };

    try {
      const response = await fetch('http://localhost:5236/api/User/Register/Register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      console.log('User registered successfully');
      setView('login'); // After successful registration, switch back to login view
    } catch (error) {
      console.error('There was an error!', error);
      setMessage('Ошибка при регистрации.');
    }
  };

  const handleLogout = () => {
    setWelcomeMessage('');
    setView('initial');
    setContentVisible(false);
  };

  return (
    <div className="App">
      {view === 'initial' && (
        <div className="login">
        </div>
      )}
      <button className='login-button' onClick={handleLoginClick}>{view === 'login' ? 'Выйти' : 'Войти'}</button>
      {view === 'login' && (
        <div className="login">
          <h2>Login</h2>
          <input type="text" placeholder="Логин" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleLogin}>Войти</button>
          <button onClick={() => setView('register')}>Зарегистрироваться</button>
          {message && <p>{message}</p>}
        </div>
      )}
      {view === 'register' && (
        <div className="register">
          <h2>Registration</h2>
          <input type="text" placeholder="Логин" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="text" placeholder="ФИО" value={fio} onChange={(e) => setFio(e.target.value)} />
          <input type="number" placeholder="Лет" value={age} onChange={(e) => setAge(parseInt(e.target.value))} />
          <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleRegister}>Зарегистрироваться</button>
          <button onClick={() => setView('initial')}>Отмена</button>
        </div>
      )}
      
    </div>
  );
}

export default DisRegistr;