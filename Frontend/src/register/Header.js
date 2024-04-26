import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you have a separate CSS file for styling
import DisRegistr from './DisRegistr'; // Import the DisRegistr component

const Header = () => {
    const [isPanelVisible, setPanelVisible] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Assuming isLoggedIn state is defined somewhere

    useEffect(() => {
        // Обработчик клика на весь документ
        const handleClickOutside = (event) => {
            const panel = document.getElementById('comboBoxPanel'); // Use the ID of the panel
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

    const togglePanel = () => {
        setPanelVisible(!isPanelVisible);
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
                    <div className='nametext0'>Имя</div>
                          <div className="circle0" onClick={togglePanel}>
                            <span className="letter0">И</span>
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
  </div>
)}
                </>
            ) : (
                    <DisRegistr />
                )}
        </div>
    );
};

export default Header;
