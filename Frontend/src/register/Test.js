import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Test.css'; // Подключаем файл стилей
import Header from './Header';

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
    return (
        <div>
                <Header/>
<p className='P'>Пройдите тест для закрепления материала</p>
<p className='p'>Язык: Анлийский язык</p>
    <div className="table-container1">
        <div className="frame">
          <div className="question-container">
            <div className="question-box">
              <span className="question-text">Вопрос первый: заполните пробел "I __ love my mom!" </span>
            </div>
          </div>
          <div className="content">
            <div className="answer-options">
              <label className="answer-option">
                <input type="radio"  name="answer" value="Вариант 1" checked={selectedAnswer1 === 'Вариант 1'}onChange={() => handleAnswerSelect1('Вариант 1')}
                    />
                are
              </label>
              <label className="answer-option">
                <input type="radio" name="answer" value="Вариант 2" checked={selectedAnswer1 === 'Вариант 2'} onChange={() => handleAnswerSelect1('Вариант 2')}
                />
                am.
              </label>
              <label className="answer-option">
                <input type="radio" name="answer" value="Вариант 3" checked={selectedAnswer1=== 'Вариант 3'} onChange={() => handleAnswerSelect1('Вариант 3')}
                />
                it
              </label>
              
            </div>
          </div>
        </div>
        </div>
        <div className="table-container">
        <div className="frame">
          <div className="question-container">
            <div className="question-box">
              <span className="question-text">Вопрос второй: Как переводится слово have?</span>
            </div>
          </div>
          <div className="content">
            <div className="answer-options">
              <label className="answer-option">
                <input type="radio"  name="answer" value="Вариант 1" checked={selectedAnswer2 === 'Вариант 1'}onChange={() => handleAnswerSelect2('Вариант 1')}
                    />
                Изменять
              </label>
              <label className="answer-option">
                <input type="radio" name="answer" value="Вариант 2" checked={selectedAnswer2 === 'Вариант 2'} onChange={() => handleAnswerSelect2('Вариант 2')}
                />
                Иметь.
              </label>
              <label className="answer-option">
                <input type="radio" name="answer" value="Вариант 3" checked={selectedAnswer2 === 'Вариант 3'} onChange={() => handleAnswerSelect2('Вариант 3')}
                />
                Исправить
              </label>
              
            </div>
          </div>
        </div>
        </div>
        <div className="table-container">
        <div className="frame">
          <div className="question-container">
            <div className="question-box">
              <span className="question-text">Вопрос третий: Расставте слова в правильном порядке to/a/time/long/for/I/like.  </span>
            </div>
          </div>
          <div className="content">
            <div className="answer-options">
              <label className="answer-option">
                <input type="radio"  name="answer" value="Вариант 1" checked={selectedAnswer3 === 'Вариант 1'}onChange={() => handleAnswerSelect3('Вариант 1')}
                    />
                I like sleep to for long time
              </label>
              <label className="answer-option">
                <input type="radio" name="answer" value="Вариант 2" checked={selectedAnswer3 === 'Вариант 2'} onChange={() => handleAnswerSelect3('Вариант 2')}
                />
                Like I sleep for to time long
              </label>
              <label className="answer-option">
                <input type="radio" name="answer" value="Вариант 3" checked={selectedAnswer3 === 'Вариант 3'} onChange={() => handleAnswerSelect3('Вариант 3')}
                />
                I like to sleep for a long time.
              </label>
              
            </div>
          </div>
        </div>
        </div>
        <div className="table-container">
        <div className="frame">
          <div className="question-container">
            <div className="question-box">
              <span className="question-text">Вопрос четвертый: Переведите это приложение на английский: Завтра с сестрой мы идем на концерт любимой группы.</span>
            </div>
          </div>
          <div className="content">
            <div className="answer-options">
              <label className="answer-option">
                <input type="radio"  name="answer" value="Вариант 1" checked={selectedAnswer4 === 'Вариант 1'}onChange={() => handleAnswerSelect4('Вариант 1')}
                    />
               Tomorrow, my sister and I are going to a concert with our favorite band..
              </label>
              <label className="answer-option">
                <input type="radio" name="answer" value="Вариант 2" checked={selectedAnswer4 === 'Вариант 2'} onChange={() => handleAnswerSelect4('Вариант 2')}
                />
                The neighbor’s cat even walks on the street in winter.
              </label>
              <label className="answer-option">
                <input type="radio" name="answer" value="Вариант 3" checked={selectedAnswer4 === 'Вариант 3'} onChange={() => handleAnswerSelect4('Вариант 3')}
                />
               They lived in Alaska for a week last year.
              </label>
              
            </div>
          </div>
        </div>
        </div>
        <div className="table-container">
        <div className="frame">
          <div className="question-container">
            <div className="question-box">
              <span className="question-text">Вопрос пятый: Отметьте предложение , которому не хватает в конце вопроса</span>
            </div>
          </div>
          <div className="content">
            <div className="answer-options">
              <label className="answer-option">
                <input type="radio"  name="answer" value="Вариант 1" checked={selectedAnswer5 === 'Вариант 1'}onChange={() => handleAnswerSelect5('Вариант 1')}
                    />
                This is gonna be the hardest time of the semester
              </label>
              <label className="answer-option">
                <input type="radio" name="answer" value="Вариант 2" checked={selectedAnswer5 === 'Вариант 2'} onChange={() => handleAnswerSelect5('Вариант 2')}
                />
                Do you drink apple juice.
              </label>
              <label className="answer-option">
                <input type="radio" name="answer" value="Вариант 3" checked={selectedAnswer5 === 'Вариант 3'} onChange={() => handleAnswerSelect5('Вариант 3')}
                />
                We’re going camping next week on Saturday
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
