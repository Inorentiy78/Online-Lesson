//экран после нажатия на кнопку записаться на курс
import React from 'react';
import './Zapisatsa.css'; // Подключаем файл стилей

function Zapisatsa() {
    return (
        <div className='container0'>
        <div className="rectangle01 "></div>
        <div className="line-top01"></div>
        <div className='nazvanie0'>Записаться на курс</div>
        <button className="butt">Записаться на курс</button>
        <div className='inputs'>
        <input type="text" class="FIO-input" placeholder="Введите ФИО" />
        <input type="text" class="Poshta-input" placeholder="Введите почту" />
        <input type="text" class="Namber-input" placeholder="Введите номер телефона" />
        </div>
        <div className='textt'>Выбранный язык: </div>
        <div className='textt1'>Казахский язык </div>
        <div className='textt2'> Тип обучения: </div>
<select className="custom-select">
    <option value="self-study">Самообучение</option>
    <option value="with-teacher">С преподавателем</option>
</select>

        </div>
        
    )}

export default Zapisatsa;