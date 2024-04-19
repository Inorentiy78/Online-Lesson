// Podrobnee.js
import React from 'react';
import './Podrobnee.css'; // Подключаем файл стилей

function Podrobnee({ isOpen, onClose, language }) {
    if (!isOpen) return null;

    return (
        <div className='container'>
            <div className="rectangle0"></div>
            <div className='nazvanie'>{language}</div>
            <div className='text1'><ul>
                <li>Время проведения занятий обговаривается индивидуально;</li>
            </ul></div>
            <div className='text2'><ul>
                <li>Занятия проходят 3 раза в неделю;</li>
            </ul></div>
            <div className='text3'> Стоимость обучения: </div>
            <div className='text4'> 15.000 тенге/месяц </div>
            <button className="butt" >Записаться на курс</button>
        </div>
    );
}

export default Podrobnee;
