import React, { useState } from 'react';
import './Test.css'; // Import your CSS file here
import Header from './Header';

const Test = () => {
    const [selectedAnswer1, setSelectedAnswer1] = useState(null);
    const [selectedAnswer2, setSelectedAnswer2] = useState(null);
    const [selectedAnswer3, setSelectedAnswer3] = useState(null);
    const [selectedAnswer4, setSelectedAnswer4] = useState(null);
    const [selectedAnswer5, setSelectedAnswer5] = useState(null);
    const [testResult, setTestResult] = useState(null);
    const [error, setError] = useState(null);
    

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

    const sendAnswers = async () => {
        const answers = {
            Answer1: selectedAnswer1,
            Answer2: selectedAnswer2,
            Answer3: selectedAnswer3,
            Answer4: selectedAnswer4,
            Answer5: selectedAnswer5,
        };

        try {
            const response = await fetch('https://localhost:7045/api/TrueTest/check', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(answers),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            if (data && data.percentage !== undefined) {
                setTestResult(data.percentage); // Update test result state with the percentage as a number
            } else {
                setError('Invalid response from server');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('Error occurred while processing the request');
        }
    };
    return (
   
          <div>
                  <Header/>
  <p className='P'>Пройдите тест для закрепления материала</p>
  <p className='p'>Язык: Английский язык</p>
      <div className="table-container">
          <div className="frame">
            <div className="question-container">
              <div className="question-box">
                <span className="question-text">Вопрос первый: заполните пробел "I __ love my mom!" </span>
              </div>
            </div>
            <div className="content">
              <div className="answer-options">
                <label className="answer-option">
                  <input type="radio" id="1.1" name="answer1" value="Вариант 1" checked={selectedAnswer1 === 'Вариант 1'} onChange={() => handleAnswerSelect1('Вариант 1')} />
                  <label htmlFor="answer1_variant1">are</label>
                </label>
                <label className="answer-option">
                  <input type="radio" id="1.2" name="answer1" value="Вариант 2" checked={selectedAnswer1 === 'Вариант 2'} onChange={() => handleAnswerSelect1('Вариант 2')} />
                  <label htmlFor="answer1_variant2">am</label>
                </label>
                <label className="answer-option">
                  <input type="radio" id="1.3" name="answer1" value="Вариант 3" checked={selectedAnswer1 === 'Вариант 3'} onChange={() => handleAnswerSelect1('Вариант 3')} />
                  <label htmlFor="answer1_variant3">it</label>
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
                  <input type="radio" id="2.1" name="answer2" value="Вариант 1" checked={selectedAnswer2 === 'Вариант 1'} onChange={() => handleAnswerSelect2('Вариант 1')} />
                  <label htmlFor="answer2_variant1">Изменять</label>
                </label>
                <label className="answer-option">
                  <input type="radio" id="2.2" name="answer2" value="Вариант 2" checked={selectedAnswer2 === 'Вариант 2'} onChange={() => handleAnswerSelect2('Вариант 2')} />
                  <label htmlFor="answer2_variant2">Иметь</label>
                </label>
                <label className="answer-option">
                  <input type="radio" id="2.3" name="answer2" value="Вариант 3" checked={selectedAnswer2 === 'Вариант 3'} onChange={() => handleAnswerSelect2('Вариант 3')} />
                  <label htmlFor="answer2_variant3">Исправить</label>
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
                  <input type="radio" id="3.1" name="answer3" value="Вариант 1" checked={selectedAnswer3 === 'Вариант 1'}onChange={() => handleAnswerSelect3('Вариант 1')}
                      />
                  I like sleep to for long time
                </label>
                <label className="answer-option">
                  <input type="radio" id="3.2" name="answer3" value="Вариант 2" checked={selectedAnswer3 === 'Вариант 2'} onChange={() => handleAnswerSelect3('Вариант 2')}
                  />
                  Like I sleep for to time long
                </label>
                <label className="answer-option">
                  <input type="radio" id="3.3" name="answer3" value="Вариант 3" checked={selectedAnswer3 === 'Вариант 3'} onChange={() => handleAnswerSelect3('Вариант 3')}
                  />
                  I like to sleep for a long time
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
                  <input type="radio" id="4.1" name="answer4" value="Вариант 1" checked={selectedAnswer4 === 'Вариант 1'}onChange={() => handleAnswerSelect4('Вариант 1')}
                      />
                Tomorrow, my sister and I are going to a concert with our favorite band.
                </label>
                <label className="answer-option">
                  <input type="radio" id="4.2" name="answer4" value="Вариант 2" checked={selectedAnswer4 === 'Вариант 2'} onChange={() => handleAnswerSelect4('Вариант 2')}
                  />
                  The neighbor’s cat even walks on the street in winter.
                </label>
                <label className="answer-option">
                  <input type="radio" id="4.3" name="answer4" value="Вариант 3" checked={selectedAnswer4 === 'Вариант 3'} onChange={() => handleAnswerSelect4('Вариант 3')}
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
                  <input type="radio" id="5.1" name="answer5" value="Вариант 1" checked={selectedAnswer5 === 'Вариант 1'}onChange={() => handleAnswerSelect5('Вариант 1')}
                      />
                  This is gonna be the hardest time of the semester
                </label>
                <label className="answer-option">
                  <input type="radio" id="5.2" name="answer5" value="Вариант 2" checked={selectedAnswer5 === 'Вариант 2'} onChange={() => handleAnswerSelect5('Вариант 2')}
                  />
                  Do you drink apple juice
                </label>
                <label className="answer-option">
                  <input type="radio" id="5.3" name="answer5" value="Вариант 3" checked={selectedAnswer5 === 'Вариант 3'} onChange={() => handleAnswerSelect5('Вариант 3')}
                  />
                  We’re going camping next week on Saturday
                </label>
                
              </div>
            </div>
          </div>
          
          <div className="complete-test-button">
                <button className="complete-test-btn" onClick={sendAnswers}>Завершить тест</button>
            </div>

            {testResult !== null && (
                <div>
                    <div className="circle">{testResult}%</div>
                    <p>Результат теста: {testResult}% правильных ответов</p>
                </div>
            )}

           </div>
        </div>
    );
  };


  export default Test;
