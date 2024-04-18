import React, { useState } from 'react';
import './Home2.css'; // Подключаем файл стилей

function Home2() {
    const [isPanelVisible, setPanelVisible] = useState(false);

    const togglePanel = () => {
        setPanelVisible(!isPanelVisible);
    };

    const handleToggle = () => {
        const panel = document.getElementById('comboBoxPanel');
        panel.classList.toggle('show');
    };

    return (
        <div className="container">
            <div className="main-screen"></div>
            <div className="header">
                <div className="line-top"></div>
                <div className="online-courses">Онлайн-курсы</div>
                <div className="about-courses">О курсах</div>
                <div className="contacts">Контакты</div>
                <div className='nametext'>Имя</div>
                <div className="circle" onClick={togglePanel}>
                    <span className="letter">И</span>
                </div>
                {isPanelVisible && (
  <div className={isPanelVisible ? "panel visible" : "panel"}>
    <div className="comboBoxHeader" onClick={handleToggle}>
      Мои курсы
      <span className="arrow">&#9662;</span> {/* Стрелочка вниз */}
    </div>
    <div id="comboBoxPanel" className="comboBoxPanel">
      <p className="Kyrs1" onClick={handleToggle}>
        Курс 1
        <span className="arrow">&#9662;</span> {/* Стрелочка вниз */}
      </p>
      <div id="PanelKyrs1" className="PanelKyrs1">
        тестовые задания
        видео-уроки
      </div>
      <div className="Kyrs2" onClick={handleToggle}>
        Курс 2
        <span className="arrow">&#9662;</span> {/* Стрелочка вниз */}
      </div>
      <div id="PanelKyrs2" className="PanelKyrs2">
        тестовые задания
        видео-уроки
      </div>
      <div className="Kyrs3" onClick={handleToggle}>
        Курс 3
        <span className="arrow">&#9662;</span> {/* Стрелочка вниз */}
      </div>
      <div id="PanelKyrs3" className="PanelKyrs1">
        тестовые задания
        видео-уроки
      </div>
    </div>
    {/* Добавьте другие пункты меню по желанию */}
  </div>
)}

                
                <div className="language-cards">
                    <div className="english-language">Английский язык</div>
                    <div className="spanish-language">Испанский язык</div>
                    <div className="italian-language">Итальянский язык</div>
                    <div className="kazakh-language">Казахский язык</div>
                    <div className="chinese-language">Китайский язык</div>
                    <div className="russian-language">Русский язык</div>
                    
                </div>
                
    <input type="text" className="input" placeholder="Введите название курса..." />
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

export default Home2;