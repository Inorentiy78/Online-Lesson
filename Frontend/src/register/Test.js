import React, { useState } from 'react';
import './Test.css'; // Подключаем файл стилей

const Test = () => {
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
    const [selectedAnswer1, setSelectedAnswer1] = useState(null);
    const [selectedAnswer2, setSelectedAnswer2] = useState(null);
    const [selectedAnswer3, setSelectedAnswer3] = useState(null);
    const [selectedAnswer4, setSelectedAnswer4] = useState(null);
    const [selectedAnswer5, setSelectedAnswer5] = useState(null);

    // Функции для выбора ответов
    const handleAnswerSelect1 = (answer) => {
        setSelectedAnswer1(answer);
    };
    const handleAnswerSelect2 = (answer) => {
        setSelectedAnswer2(answer);
    };
    const handleAnswerSelect3 = (answer) => {
        setSelectedAnswer3(answer);
    };
    const handleAnswerSelect4 = (answer) => {
        setSelectedAnswer4(answer);
    };
    const handleAnswerSelect5 = (answer) => {
        setSelectedAnswer5(answer);
    };
    // const handleCompleteTest = () => {
    //     // Logic to handle completing the test
    //     setTestCompleted(true);
    //     // You can add further logic here, such as submitting the answers
    // };
  
    return (
        <div>
            <div className="line-tops"></div>
                <div className="online-coursess">Онлайн-курсы</div>
                <div className="about-coursess">О курсах</div>
                <div className="contactss">Контакты</div>
                <div className='nametexts'>Имя</div>
                <div className="circles" onClick={togglePanel}>
                    <span className="letters">И</span>
                </div>
                {isPanelVisible && (
  <div className={isPanelVisible ? "panels visible" : "panels"}>
    <div className="comboBoxHeaders" onClick={() => handleToggle('comboBoxPanels')}>
        Мои курсы
        <span className="arrows">&#9662;</span>
    </div>
    <div id="comboBoxPanels" className="comboBoxPanels">
        <p className="Kyrss1" onClick={() => handleToggle('PanelKyrss1')}>
            Курс 1
            <span className="arrows" onClick={(e) => { e.stopPropagation(); handleToggle('PanelKyrss1')}}>&#9662;</span>
        </p>
        <div id="PanelKyrss1" className="PanelKyrss1">
            <p>тестовые задания</p>
            <p>видео-уроки</p>
        </div>
        <p className="Kyrss2" onClick={() => handleToggle('PanelKyrss2')}>
            Курс 2
            <span className="arrows" onClick={(e) => { e.stopPropagation(); handleToggle('PanelKyrss2')}}>&#9662;</span>
        </p>
        <div id="PanelKyrss2" className="PanelKyrss2">
            <p>тестовые задания</p>
            <p>видео-уроки</p>
        </div>
        <p className="Kyrss3" onClick={() => handleToggle('PanelKyrss3')}>
            Курс 3
            <span className="arrows" onClick={(e) => { e.stopPropagation(); handleToggle('PanelKyrss3')}}>&#9662;</span>
        </p>
        <div id="PanelKyrss3" className="PanelKyrss3">
            <p>тестовые задания</p>
            <p>видео-уроки</p>
        </div>
    </div>
    {/* Добавьте другие пункты меню по желанию */}
  </div>
)}
<p className='P'>Пройдите тест для закрепления материала</p>
<p className='p'>Язык: Анлийский язык</p>
    <div className="table-container1">
        <div className="frame">
          <div className="question-container">
            <div className="question-box">
              <span className="question-text">Вопрос первый</span>
            </div>
          </div>
          <div className="content">
            <div className="answer-options">
              <label className="answer-option">
                <input type="radio"  name="answer" value="Вариант 1" checked={selectedAnswer1 === 'Вариант 1'}onChange={() => handleAnswerSelect1('Вариант 1')}
                    />
                Вариант 1
              </label>
              <label className="answer-option">
                <input type="radio" name="answer" value="Вариант 2" checked={selectedAnswer1 === 'Вариант 2'} onChange={() => handleAnswerSelect1('Вариант 2')}
                />
                Вариант 2
              </label>
              <label className="answer-option">
                <input type="radio" name="answer" value="Вариант 3" checked={selectedAnswer1=== 'Вариант 3'} onChange={() => handleAnswerSelect1('Вариант 3')}
                />
                Вариант 3
              </label>
              
            </div>
          </div>
        </div>
        </div>
        <div className="table-container2">
        <div className="frame">
          <div className="question-container">
            <div className="question-box">
              <span className="question-text">Вопрос второй</span>
            </div>
          </div>
          <div className="content">
            <div className="answer-options">
              <label className="answer-option">
                <input type="radio"  name="answer" value="Вариант 1" checked={selectedAnswer2 === 'Вариант 1'}onChange={() => handleAnswerSelect2('Вариант 1')}
                    />
                Вариант 1
              </label>
              <label className="answer-option">
                <input type="radio" name="answer" value="Вариант 2" checked={selectedAnswer2 === 'Вариант 2'} onChange={() => handleAnswerSelect2('Вариант 2')}
                />
                Вариант 2
              </label>
              <label className="answer-option">
                <input type="radio" name="answer" value="Вариант 3" checked={selectedAnswer2 === 'Вариант 3'} onChange={() => handleAnswerSelect2('Вариант 3')}
                />
                Вариант 3
              </label>
              
            </div>
          </div>
        </div>
        </div>
        <div className="table-container">
        <div className="frame">
          <div className="question-container">
            <div className="question-box">
              <span className="question-text">Вопрос третий</span>
            </div>
          </div>
          <div className="content">
            <div className="answer-options">
              <label className="answer-option">
                <input type="radio"  name="answer" value="Вариант 1" checked={selectedAnswer3 === 'Вариант 1'}onChange={() => handleAnswerSelect3('Вариант 1')}
                    />
                Вариант 1
              </label>
              <label className="answer-option">
                <input type="radio" name="answer" value="Вариант 2" checked={selectedAnswer3 === 'Вариант 2'} onChange={() => handleAnswerSelect3('Вариант 2')}
                />
                Вариант 2
              </label>
              <label className="answer-option">
                <input type="radio" name="answer" value="Вариант 3" checked={selectedAnswer3 === 'Вариант 3'} onChange={() => handleAnswerSelect3('Вариант 3')}
                />
                Вариант 3
              </label>
              
            </div>
          </div>
        </div>
        </div>
        <div className="table-container">
        <div className="frame">
          <div className="question-container">
            <div className="question-box">
              <span className="question-text">Вопрос четвертый</span>
            </div>
          </div>
          <div className="content">
            <div className="answer-options">
              <label className="answer-option">
                <input type="radio"  name="answer" value="Вариант 1" checked={selectedAnswer4 === 'Вариант 1'}onChange={() => handleAnswerSelect4('Вариант 1')}
                    />
                Вариант 1
              </label>
              <label className="answer-option">
                <input type="radio" name="answer" value="Вариант 2" checked={selectedAnswer4 === 'Вариант 2'} onChange={() => handleAnswerSelect4('Вариант 2')}
                />
                Вариант 2
              </label>
              <label className="answer-option">
                <input type="radio" name="answer" value="Вариант 3" checked={selectedAnswer4 === 'Вариант 3'} onChange={() => handleAnswerSelect4('Вариант 3')}
                />
                Вариант 3
              </label>
              
            </div>
          </div>
        </div>
        </div>
        <div className="table-container">
        <div className="frame">
          <div className="question-container">
            <div className="question-box">
              <span className="question-text">Вопрос пятый</span>
            </div>
          </div>
          <div className="content">
            <div className="answer-options">
              <label className="answer-option">
                <input type="radio"  name="answer" value="Вариант 1" checked={selectedAnswer5 === 'Вариант 1'}onChange={() => handleAnswerSelect5('Вариант 1')}
                    />
                Вариант 1
              </label>
              <label className="answer-option">
                <input type="radio" name="answer" value="Вариант 2" checked={selectedAnswer5 === 'Вариант 2'} onChange={() => handleAnswerSelect5('Вариант 2')}
                />
                Вариант 2
              </label>
              <label className="answer-option">
                <input type="radio" name="answer" value="Вариант 3" checked={selectedAnswer5 === 'Вариант 3'} onChange={() => handleAnswerSelect5('Вариант 3')}
                />
                Вариант 3
              </label>
              
            </div>
          </div>
        </div>
        <div className="complete-test-button">
                <button className="complete-test-btn" onClick={() => alert('Тест завершен!')}>Завершить тест</button>
            </div>
        </div>
      </div>
  );
};


export default Test;
