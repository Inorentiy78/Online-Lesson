import React from 'react';
import './Desing.css'; // Подключаем файл стилей

function Desing() {
    return (
        <div className="container">
            <div className="main-screen"></div>
            <div className="header">
                <div className="online-courses"></div>
                <div className="line-top"></div>
                <div className="about-courses"></div>
                <div className="contacts"></div>
                <div className="language-cards">
                    <div className="english-language"></div>
                    <div className="spanish-language"></div>
                    <div className="italian-language"></div>
                    <div className="kazakh-language"></div>
                    <div className="chinese-language"></div>
                    <div className="russian-language"></div>
                </div>
                <div className="search"></div>
                <div className="line"></div>
                <div className="search-input"></div>
                <div className="search-button"></div>
                <div className="search-string"></div>
            </div>
            <div className="card-container">
                <div className="english-card"></div>
                <div className="spanish-card"></div>
                <div className="italian-card"></div>
                <div className="kazakh-card"></div>
                <div className="chinese-card"></div>
                <div className="russian-card"></div>
            </div>
        </div>
    );
}

export default Desing;
