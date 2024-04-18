//Главный экран до захода по логину и паролю
import React from 'react';
import './Home1.css'; // Подключаем файл стилей

function Home1() {
    return (
        <div className="container">
            <div className="main-screen"></div>
            <div className="header">
                <div className="line-top"></div>
                <div className="online-courses">Онлайн-курсы</div>
                <div className="about-courses">О курсах</div>
                <div className="contacts">Контакты</div>
                
                <div className="language-cards">
                    <div className="english-language">Английский язык</div>
                    <div className="spanish-language">Испанский язык</div>
                    <div className="italian-language">Итальянский язык</div>
                    <div className="kazakh-language">Казахский язык</div>
                    <div className="chinese-language">Китайский язык</div>
                    <div className="russian-language">Русский язык</div>
                    
                </div>
               
    <input type="text" className="search-input" placeholder="Введите название курса..." />
    {/* <div className="rectangle-1 "></div>  */}
    {/*русс*/}<div className="rectangle-2 "></div>
    <button className="butt2">Подробнее</button>
    {/*кит*/}<div className="rectangle-3 "></div>
    <button className="butt3">Подробнее</button>
    {/*итал*/}<div className="rectangle-4 "></div>
    <button className="butt4">Подробнее</button>
    {/*англ*/}<div className="rectangle-5 "></div>
    <button className="butt5">Подробнее</button>
    {/*каз*/}<div className="rectangle-6"></div>
    <button className="butt6">Подробнее</button>
    {/*испан*/}<div className="rectangle-7"></div>
    <button className="butt7">Подробнее</button>



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

export default Home1;
