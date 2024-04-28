//Экран с инфой О курсах
import React, { useState } from 'react';
import './OKyrsah.css'; // Подключаем файл стилей
import { Link } from 'react-router-dom';
import Header from './Header';



function OKyrsah() {
const [isPanelVisible, setPanelVisible] = useState(false);

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
        <div className="container1">
            <div className="main-screen1"></div>
            <Header/>
        <div className='Zogolovok'>Здесь вы можете узнать о наших курсах</div>
        <div className='h10'>В наших курсах можно выучить любой интересующий вас язык онлайн.     </div>
        <div className='h20'>Тут вы можете изучать различными удобными вам способами: тестами, изучением текста или же просмотр обучающих видеороликов. 
После каждого этапа обучения вас ждёт небольшой тест на закрепление пройденного материала. </div>
        <div className='h30'>
Так же если у вас возникнут сложности в ходе обучения, вы можете напрямую связаться с вашим наставником в выбранном языке.</div>
        <div className='h40'>Желаем вам удачи и успехов в учёбе, надеюсь мы вам помогли!</div>


</div>
        
        
    )}
            

export default OKyrsah;