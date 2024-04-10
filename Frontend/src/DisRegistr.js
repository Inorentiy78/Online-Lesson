import React, { useState } from 'react';

const courses = ['Английский язык', 'Испанский язык', 'Итальянский язык', 'Китайский язык', 'Казахский язык', 'Русский язык'];

function DisRegistr() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fio, setFio] = useState('');
  const [age, setAge] = useState(0);
  const [view, setView] = useState('initial');
  const [message, setMessage] = useState('');
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [contentVisible, setContentVisible] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showCourses, setShowCourses] = useState(false);
  const [filteredCourses, setFilteredCourses] = useState([]);

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
      setView('login'); 
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

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
  };

  const handleSearch = () => {
    const filtered = courses.filter(course =>
      course.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCourses(filtered);
    setShowCourses(true);
  };

  return (
    <div className="App">
      <header className="header">
        <nav className="navbar">
          <div className="nav-item">
            <button>Онлайн Курсы</button>
          </div>
          <div className="nav-item">
            <button>О курсах</button>
          </div>
          <div className="nav-item">
            <button>Контакты</button>
          </div>
        </nav>
      </header>
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
      {view === 'welcome' && (
        <div className="welcome">
          <h2>Welcome</h2>
          <p>{welcomeMessage}</p>
          {contentVisible && (
            <button className="logout-button" onClick={handleLogout}>
              Выйти
            </button>
          )}
        </div>
      )}
 <div className="courses">
        <input
          type="text"
          placeholder="Введите название курса"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Найти</button>
        {showCourses && (
          <div className="course-list">
            {filteredCourses.length > 0 ? (
              filteredCourses.map(course => (
                <div key={course} className="course-card">
                  <p>{course}</p>
                  <button onClick={() => handleCourseSelect(course)}>Подробнее...</button>
                </div>
              ))
            ) : (
              <p>No courses found.</p>
            )}
          </div>
        )}
      </div>

      {/* Selected course */}
      {selectedCourse && (
        <div className="selected-course">
          <h2>Selected Course</h2>
          <p>{selectedCourse}</p>
        </div>
      )}
    </div>
  );
}

export default DisRegistr;