//Экран с инфой О курсах
import React from 'react';
import { Link } from 'react-router-dom';
import './OKyrsah.css'; // Подключаем файл стилей

function OKyrsah() {
    return (
        <div className="container1">
            <div className="main-screen1"></div>
            <div className="header1">
                <div className="line-top1"></div>
                <div className="online-courses1">Онлайн-курсы</div>
                <Link to="/about-courses" className='about-courses1'>О курсах</Link>
                         <Link to="/contacts" className="contacts1">Контакты</Link>
                
        </div>
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