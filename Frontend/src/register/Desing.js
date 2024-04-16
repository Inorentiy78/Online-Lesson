import React from 'react';
import './Desing.css'; // Подключаем файл стилей

function Desing() {
    return (
        <div className="container">
            <div className="main-screen"></div>
            <div className="header">
                <div className="online-courses">Онлайн-курсы</div>
                <div className="line-top"></div>
                <div className="about-courses">О курсах</div>
                <div className="contacts">Контакты</div>
                <div className="language-cards">
                    <div className="english-language">Английский язык</div>
                    <div className="spanish-language">Испанский язык</div>
                    <div className="italian-language">Итальянский язык</div>
                    {/* <div className="kazakh-language">Казахский язык</div>
                    <div className="chinese-language">Китайский язык</div>
                    <div className="russian-language">Русский язык</div> */}
                </div>
                
    <input type="text" className="search-input" placeholder="Введите название курса..." />
    
 
                <div className="line"></div>
                
                <div className="search-button">  Найти</div>
                <div className="search-string"></div>
            </div>
            <div className="card-container">
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

export default Desing;
