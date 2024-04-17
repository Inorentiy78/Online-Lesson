//экран после нажатия на кнопку подробнее
import React from 'react';
import './Podrobnee.css'; // Подключаем файл стилей

function Podrobnee() {
    return (
        <div className='container'>
        <div className="rectangle0 "></div>
        <div className="line-top0"></div>
        <div className='nazvanie'>Казахский язык</div>
        <div className='text1'><ul>
    <li>Время проведения занятий обговаривается индивидуально;</li>
</ul></div>
<div className='text2'><ul>
    <li>Занятия проходят 3 раза в неделю;</li>
</ul></div>
        <div className='text3'> Стоимость обучения: </div>
        <div className='text4'> 15.000 тенге/месяц </div>
        <button className="butt">Записаться на курс</button>
        </div>
    )}

export default Podrobnee;