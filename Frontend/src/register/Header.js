import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import DisRegistr from './DisRegistr';

const Header = () => {
    const [isPanelVisible, setPanelVisible] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    useEffect(() => {
        const handleClickOutside = (event) => {
            const panel = document.getElementById('comboBoxPanels');
            if (panel && !panel.contains(event.target)) {
                setPanelVisible(false);
            }
        };

        if (isPanelVisible) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isPanelVisible]);

    const togglePanel = (event) => {
        event.stopPropagation(); // Остановить всплытие события, чтобы не вызывались другие обработчики
        setPanelVisible(!isPanelVisible);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleToggle = (panelId) => {
        const panel = document.getElementById(panelId);
        if (panel) {
            panel.classList.toggle('show');
        }
    };
    return (
        <div className="header">
            <div className="line-top"></div>
            <Link to="/" className="online-courses">Онлайн курсы</Link>
            <Link to="/about-courses" className='about-courses'>О курсах</Link>
            <Link to="/contacts" className="contacts">Контакты</Link>
            {isLoggedIn ? (
                <>
                    <div className='Name'>Админ</div>
                    <div className="circle0" onClick={(e) => togglePanel(e)}>
                        <span className="letter0">А</span>
                    </div>
                    {isPanelVisible && (
  <div className={isPanelVisible ? "panel visible" : "panel"}>
    <div className="comboBoxHeader" onClick={() => handleToggle('comboBoxPanel')}>
                                     Мои курсы
                                     <span className="arrow">&#9662;</span>
    </div>
    <div id="comboBoxPanel" className="comboBoxPanel">
        <p className="Kyrs1" onClick={() => handleToggle('PanelKyrs1')}>
            Английский язык
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
                    <button className="logout-button" onClick={handleLogout}>Выйти</button>
                </>
            ) : (
                <DisRegistr onLogin={handleLogin} />
            )}
        </div>
    );
};

export default Header;
