//главный экран после захода по паролю и логину
import React, { useState } from 'react';
import './Home2.css'; // Подключаем файл стилей

function Home2() {
    const [isPanelVisible, setPanelVisible] = useState(false);

    const togglePanel = () => {
        setPanelVisible(!isPanelVisible);
    };

    const handleToggle = (panelId) => {
      const panel = document.getElementById(panelId);
      console.log(panelId, panel);
      panel.classList.toggle('show');
      console.log(panel.classList.contains('show'));
    };

    return (
        <div className="container0">
            <div className="main-screen0"></div>
            <div className="header0">
                <div className="line-top0"></div>
                <div className="online-courses0">Онлайн-курсы</div>
                <div className="about-courses0">О курсах</div>
                <div className="contacts0">Контакты</div>
                <div className='nametext0'>Имя</div>
                <div className="circle0" onClick={togglePanel}>
                    <span className="letter0">И</span>
                </div>
                {isPanelVisible && (
  <div className={isPanelVisible ? "panel visible" : "panel"}>
    <div className="comboBoxHeader" onClick={() => handleToggle('comboBoxPanel')}>
        Мои курсы
        <span className="arrow">&#9662;</span>
    </div>
    <div id="comboBoxPanel" className="comboBoxPanel">
        <p className="Kyrs1" onClick={() => handleToggle('PanelKyrs1')}>
            Курс 1
            <span className="arrow" onClick={(e) => { e.stopPropagation(); handleToggle('PanelKyrs1')}}>&#9662;</span>
        </p>
        <div id="PanelKyrs1" className="PanelKyrs1">
            <p>тестовые задания</p>
            <p>видео-уроки</p>
        </div>
        <p className="Kyrs2" onClick={() => handleToggle('PanelKyrs2')}>
            Курс 2
            <span className="arrow" onClick={(e) => { e.stopPropagation(); handleToggle('PanelKyrs2')}}>&#9662;</span>
        </p>
        <div id="PanelKyrs2" className="PanelKyrs2">
            <p>тестовые задания</p>
            <p>видео-уроки</p>
        </div>
        <p className="Kyrs3" onClick={() => handleToggle('PanelKyrs3')}>
            Курс 3
            <span className="arrow" onClick={(e) => { e.stopPropagation(); handleToggle('PanelKyrs3')}}>&#9662;</span>
        </p>
        <div id="PanelKyrs3" className="PanelKyrs3">
            <p>тестовые задания</p>
            <p>видео-уроки</p>
        </div>
    </div>
    {/* Добавьте другие пункты меню по желанию */}
  </div>
)}

                
                <div className="language-cards0">
                    <div className="english-language0">Английский язык</div>
                    <div className="spanish-language0">Испанский язык</div>
                    <div className="italian-language0">Итальянский язык</div>
                    <div className="kazakh-language0">Казахский язык</div>
                    <div className="chinese-language0">Китайский язык</div>
                    <div className="russian-language0">Русский язык</div>
                    
                </div>
                
    <input type="text" className="input0" placeholder="Введите название курса..." />
    {/* <div className="rectangle-1 "></div>  */}
    {/*русс*/}<div className="rectangle-20 "></div>
    <button className="butt20">Подробнее</button>
    {/*кит*/}<div className="rectangle-30 "></div>
    <button className="butt30">Подробнее</button>
    {/*итал*/}<div className="rectangle-40 "></div>
    <button className="butt40">Подробнее</button>
    {/*англ*/}<div className="rectangle-50 "></div>
    <button className="butt50">Подробнее</button>
    {/*каз*/}<div className="rectangle-60"></div>
    <button className="butt60">Подробнее</button>
    {/*испан*/}<div className="rectangle-70"></div>
    <button className="butt70">Подробнее</button>



                <div className="line0"></div>
                
                <div className="search-button0">  Найти</div>
                <div className="search-string0"></div>
            </div>
            <div className="language-courses-list0">
                <div className="english-card0">Английский язык</div>
                <div className="spanish-card0">Испанский язык</div>
                <div className="italian-card0">Итальянский язык</div>
                <div className="kazakh-card0">Казахский язык</div>
                <div className="chinese-card0">Китайский язык</div>
                <div className="russian-card0">Русский язык</div>
            </div>
        </div>
    );
}

export default Home2;