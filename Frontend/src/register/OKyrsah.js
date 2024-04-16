//Экран с инфой О курсах
import React from 'react';
import './OKyrsah.css'; // Подключаем файл стилей

function OKyrsah() {
    return (
        <div className="container">
            <div className="main-screen"></div>
            <div className="header">
                <div className="line-top"></div>
                <div className="online-courses">Онлайн-курсы</div>
                <div className="about-courses">О курсах</div>
                <div className="contacts">Контакты</div>
                
        </div>
        <div className='Zogolovok'>Здесь вы можете узнать о наших курсах</div>
        <div className='h1'>В наших курсах можно выучить любой интересующий вас язык онлайн.     </div>
        <div className='h2'>Тут вы можете изучать различными удобными вам способами: тестами, изучением текста или же просмотр обучающих видеороликов. 
После каждого этапа обучения вас ждёт небольшой тест на закрепление пройденного материала. </div>
        <div className='h3'>
Так же если у вас возникнут сложности в ходе обучения, вы можете напрямую связаться с вашим наставником в выбранном языке.</div>
        <div className='h4'>Желаем вам удачи и успехов в учёбе, надеюсь мы вам помогли!</div>


</div>
        
        
    )}
            

export default OKyrsah;