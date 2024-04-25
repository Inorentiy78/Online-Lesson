//Главный экран до геристрации
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home2.css';
import './Podrobnee.css';
import Podrobnee from './Podrobnee';

function Home2() {
    const [isPanelVisible, setPanelVisible] = useState(false);
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

    const togglePanel = () => {
        setPanelVisible(!isPanelVisible);
    };

    const handleToggle = (panelId) => {
        const panel = document.getElementById(panelId);
        if (panel) {
            panel.classList.toggle('show');
        }
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            const modal = document.querySelector('.container0'); // Изменить селектор на свой
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
        <div className="container0">
                     <Podrobnee isOpen={modalOpen} onClose={closeModal} language={selectedLanguage} />
                     <div className="main-screen0"></div>
                     <div className="header0">
                         <div className="line-top0"></div>
                         <div className="online-courses0">Онлайн-курсы</div>
                         <Link to="/about-courses" className='about-courses0'>О курсах</Link>
                         <Link to="/contacts" className="contacts0">Контакты</Link>
                         <div className='nametext0'>Имя</div>
                          <div className="circle0" onClick={togglePanel}>
                            <span className="letter0">И</span>
                         </div> 
                     </div>
                         {isPanelVisible && (
  <div className={isPanelVisible ? "panel visible" : "panel"}>
    <div className="comboBoxHeader" onClick={() => handleToggle('comboBoxPanel')}>
                                     Мои курсы
                                     <span className="arrow">&#9662;</span>
    </div>
    <div id="comboBoxPanel" className="comboBoxPanel">
        <p className="Kyrs1" onClick={() => handleToggle('PanelKyrs1')}>
            Курс 1
            <span className="arrow" onClick={(e) => { e.stopPropagation(); handleToggle('PanelKyrs1')}}>&#9662;</span>
        </p>
        <div id="PanelKyrs1" className="PanelKyrs1">
        <p><Link to="/tests" className='test-link'>Тестовые задания</Link></p>
        <p><Link to="/video" className='video-link'>видео-уроки</Link></p>
        </div>
        <p className="Kyrs2" onClick={() => handleToggle('PanelKyrs2')}>
            Курс 2
            <span className="arrow" onClick={(e) => { e.stopPropagation(); handleToggle('PanelKyrs2')}}>&#9662;</span>
        </p>
        <div id="PanelKyrs2" className="PanelKyrs2">
        <p><Link to="/tests" className='test-link'>Тестовые задания</Link></p>
        <p><Link to="/video" className='video-link'>видео-уроки</Link></p>
        </div>
        <p className="Kyrs3" onClick={() => handleToggle('PanelKyrs3')}>
            Курс 3
            <span className="arrow" onClick={(e) => { e.stopPropagation(); handleToggle('PanelKyrs3')}}>&#9662;</span>
        </p>
        <div id="PanelKyrs3" className="PanelKyrs3">
        <p><Link to="/tests" className='test-link'>Тестовые задания</Link></p>
        <p><Link to="/video" className='video-link'>видео-уроки</Link></p>
        </div>
    </div>
    {/* Добавьте другие пункты меню по желанию */}
  </div>
)}
                
                <div className="language-cards">
                    <div className="english-language">Английский язык</div>
                    <div className="spanish-language">Испанский язык</div>
                    <div className="italian-language">Итальянский язык</div>
                    <div className="kazakh-language">Казахский язык</div>
                    <div className="chinese-language">Китайский язык</div>
                    <div className="russian-language">Русский язык</div>
                </div>
                <div classname="innerparts">
               
                <input type="text" className="search-input" placeholder="Введите название курса..." />
    
                <button className="butt2" onClick={() => openModal('Английский язык')}>Подробнее</button>
            <button className="butt3" onClick={() => openModal('Испанский язык')}>Подробнее</button>
            <button className="butt4" onClick={() => openModal('Итальянский язык')}>Подробнее</button>
            <button className="butt6" onClick={() => openModal('Казахский язык')}>Подробнее</button>
            <button className="butt5" onClick={() => openModal('Китайский язык')}>Подробнее</button>
            <button className="butt7" onClick={() => openModal('Русский язык')}>Подробнее</button>


                {/*русс*/}<div className="rectangle-2 "></div>
                {/*кит*/}<div className="rectangle-3 "></div>
                {/*итал*/}<div className="rectangle-4 "></div>
                {/*англ*/}<div className="rectangle-5 "></div>
                {/*каз*/}<div className="rectangle-6"></div>
                {/*испан*/}<div className="rectangle-7"></div>
                

                <div className="line"></div>
                
                <div className="search-button">  Найти</div>
                <div className="search-string"></div>
            </div>
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

export default Home2;


