import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Video.css'; // Подключаем файл стилей
import videoFile from './знакомство.mp4';
import videoFile1 from './семья.mp4';
import videoFile2 from './путешествие.mp4';
import Header from './Header';


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
                <Header/>
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
