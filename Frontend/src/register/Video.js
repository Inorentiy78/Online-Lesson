import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Video.css'; // Подключаем файл стилей
import videoFile from './знакомство.mp4';
import videoFile1 from './семья.mp4';
import videoFile2 from './путешествие.mp4';


const Video = () => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isPanelVisible, setPanelVisible] = useState(false);
    const [isTestCompleted, setTestCompleted] = useState(false);

    const handleAnswerSelect = (answer) => {
      setSelectedAnswer(answer);
    };
    const togglePanel = () => {
        setPanelVisible(!isPanelVisible);
    };

    const handleToggle = (panelId) => {
        const panel = document.getElementById(panelId);
        if (panel) {
            panel.classList.toggle('shows');
        }
    };
  
    return (
        <div>
            <div className="line-tops"></div>
                <div className="online-coursess">Онлайн-курсы</div>
                
                <Link to="/about-courses" className='about-coursess'>О курсах</Link>
                         <Link to="/contacts" className="contactss">Контакты</Link>
                <div className='nametexts'>Имя</div>
                <div className="circles" onClick={togglePanel}>
                    <span className="letters">И</span>
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
 <p className='P'>Для изучения материала посмотрите видео-курс</p>
            <p className='p'>Язык: Анлийский язык</p>
            <div className="table-container">
                <div className="frame">
                    <video width="100%" height="100%" controls>
                        <source src={videoFile} type="video/mp4" />
                        Ваш браузер не поддерживает видео-тег.
                    </video>
                </div>
                <p className='p1'>Урок 1. Тема: Знакомство</p>
            </div>
            <div className="table-container">
                <div className="frame">
                    <video width="100%" height="100%" controls>
                        <source src={videoFile1} type="video/mp4" />
                        Ваш браузер не поддерживает видео-тег.
                    </video>
                </div>
                <p className='p2'>Урок 2. Тема: Семья</p>
            </div>
            <div className="table-container">
                <div className="frame">
                    <video width="100%" height="100%" controls>
                        <source src={videoFile2} type="video/mp4" />
                        Ваш браузер не поддерживает видео-тег.
                    </video>
                </div>
                <p className='p3'>Урок 3. Тема: Путешествие</p>
            </div>
        </div>
    );
};


export default Video;
