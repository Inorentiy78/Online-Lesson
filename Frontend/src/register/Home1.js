//Главный экран до геристрации
import React, { useState, useEffect } from 'react';
import './Home1.css'; // Подключаем файл стилей
import './Podrobnee.css'; // Подключаем файл стилей
import Podrobnee from './Podrobnee'; // Импортируем компонент модального окна

function Home1() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('');

    const openModal = (language) => {
        setSelectedLanguage(language);
        setModalOpen(true);
    };
    
    const closeModal = () => {
        setSelectedLanguage('');
        setModalOpen(false);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            const modal = document.querySelector('.container'); // Изменить селектор на свой
            if (modal && !modal.contains(event.target)) {
                setModalOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <div className="container">
            <Podrobnee isOpen={modalOpen} onClose={closeModal} language={selectedLanguage} />  
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
    
                <button className="butt2" onClick={() => openModal('Английский язык')}>Подробнее</button>
            <button className="butt3" onClick={() => openModal('Испанский язык')}>Подробнее</button>
            <button className="butt4" onClick={() => openModal('Итальянский язык')}>Подробнее</button>
            <button className="butt6" onClick={() => openModal('Казахский язык')}>Подробнее</button>
            <button className="butt5" onClick={() => openModal('Китайский язык')}>Подробнее</button>
            <button className="butt7" onClick={() => openModal('Русский язык')}>Подробнее</button>


                {/*русс*/}<div className="rectangle-2 "></div>
                {/*кит*/}<div className="rectangle-3 "></div>
                {/*итал*/}<div className="rectangle-4 "></div>
                {/*англ*/}<div className="rectangle-5 "></div>
                {/*каз*/}<div className="rectangle-6"></div>
                {/*испан*/}<div className="rectangle-7"></div>
                

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
