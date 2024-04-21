import React, { useState } from 'react';
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
                <div className="about-coursess">О курсах</div>
                <div className="contactss">Контакты</div>
                <div className='nametexts'>Имя</div>
                <div className="circles" onClick={togglePanel}>
                    <span className="letters">И</span>
                </div>
                {isPanelVisible && (
  <div className={isPanelVisible ? "panels visible" : "panels"}>
    <div className="comboBoxHeaders" onClick={() => handleToggle('comboBoxPanels')}>
        Мои курсы
        <span className="arrows">&#9662;</span>
    </div>
    <div id="comboBoxPanels" className="comboBoxPanels">
        <p className="Kyrss1" onClick={() => handleToggle('PanelKyrss1')}>
            Курс 1
            <span className="arrows" onClick={(e) => { e.stopPropagation(); handleToggle('PanelKyrss1')}}>&#9662;</span>
        </p>
        <div id="PanelKyrss1" className="PanelKyrss1">
            <p>тестовые задания</p>
            <p>видео-уроки</p>
        </div>
        <p className="Kyrss2" onClick={() => handleToggle('PanelKyrss2')}>
            Курс 2
            <span className="arrows" onClick={(e) => { e.stopPropagation(); handleToggle('PanelKyrss2')}}>&#9662;</span>
        </p>
        <div id="PanelKyrss2" className="PanelKyrss2">
            <p>тестовые задания</p>
            <p>видео-уроки</p>
        </div>
        <p className="Kyrss3" onClick={() => handleToggle('PanelKyrss3')}>
            Курс 3
            <span className="arrows" onClick={(e) => { e.stopPropagation(); handleToggle('PanelKyrss3')}}>&#9662;</span>
        </p>
        <div id="PanelKyrss3" className="PanelKyrss3">
            <p>тестовые задания</p>
            <p>видео-уроки</p>
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
