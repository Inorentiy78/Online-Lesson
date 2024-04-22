import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DisRegistr from './register/DisRegistr';
import Home1 from './register/Home1';
import OKyrsah from './register/OKyrsah';
import Contacts from './register/Contacts';
import Podrobnee from './register/Podrobnee';
import Zapisatsa from './register/Zapisatsa';
import Home2 from './register/Home2';
import Test from './register/Test';
import Video from './register/Video';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [view, setView] = useState('initial'); // initial or login

  const openModal = (language) => {
    setSelectedLanguage(language);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedLanguage('');
    setModalOpen(false);
  };

  const handleLoginClick = () => { // Функция для кнопки Войти
    setView('login');
  };

  return (
    <div className="App">
      <header className="App-header">
        <Podrobnee isOpen={modalOpen} onClose={closeModal} language={selectedLanguage} />
         <Router>
          <Routes>
            <Route exact path="/" element={<Home2 />} />
             {/*<Route exact path="/" element={<Home1 />} openModal={openModal} onLoginClick={handleLoginClick} /> */}
            <Route path="/about-courses" element={<OKyrsah />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/tests" element={<Test />} />
            <Route path="/video" element={<Video/>} />
          </Routes>
        </Router>
        {/*<Zapisatsa/>*/}
        {/* <DisRegistr handleLoginClick={handleLoginClick} />  */}
      
      </header>
    </div>
  );
}

export default App;
