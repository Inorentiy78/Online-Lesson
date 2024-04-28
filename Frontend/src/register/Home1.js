//Главный экран до геристрации
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home1.css';
import './Podrobnee.css';
import Podrobnee from './Podrobnee';
import Header from './Header';
import Cards from './Cards';

function Home1() {
    const [modalOpen, setModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const openModal = (language) => {
    setSelectedLanguage(language);
    setModalOpen(true); 
  };
  
  const closeModal = () => {
    setSelectedLanguage('');
    setModalOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const modal = document.querySelector('.container'); // Изменить селектор на свой
      if (modal && !modal.contains(event.target)) {
        setModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

    return (
        <div className="container">
           
            <Podrobnee isOpen={modalOpen} onClose={closeModal} language={selectedLanguage} />  
            <div className="main-screen"></div>
           <Header/>
               
                
                {/* <div className="language-cards">
                    <div className="english-language">Английский язык</div>
                    <div className="spanish-language">Испанский язык</div>
                    <div className="italian-language">Итальянский язык</div>
                    <div className="kazakh-language">Казахский язык</div>
                    <div className="chinese-language">Китайский язык</div>
                    <div className="russian-language">Русский язык</div>
                </div> */}
               
                <input type="text" className="search-input" placeholder="Введите название курса..." />
                  <div className='asd'>
 
                    <div className='card-column1'>
               <Cards title="Английский язык" onClick={() => openModal('Английский язык')}/>
               <Cards title="Испанский язык" onClick={() => openModal('Испанский язык')}/>
               <Cards title="Итальянский язык" onClick={() => openModal('Итальянский язык')}/>
                    </div>
                    <div className='card-column2'>
               <Cards title="Казахский язык" onClick={() => openModal('Казахский язык')}/>
               <Cards title="Китайский язык" onClick={() => openModal('Китайский язык')}/>
               <Cards title="Русский язык" onClick={() => openModal('Русский язык')}/>
                    </div>
                  </div>

                <div className="line"></div>
                
                <div className="search-button">  Найти</div>
                <div className="search-string"></div>
          
            <div className="language-courses-list">
                <div className="english-card">Английский язык</div>
                <div className="spanish-card">Испанский язык</div>
                <div className="italian-card">Итальянский язык</div>
                <div className="kazakh-card">Казахский язык</div>
                <div className="chinese-card">Китайский язык</div>
                <div className="russian-card">Русский язык</div>
            </div>
            
        </div>
    );
}

export default Home1;