import React, { useState } from 'react';
import './Podrobnee.css';
import Zapisatsa from './Zapisatsa';

function Podrobnee({ isOpen, language }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isZapisatsaOpen, setIsZapisatsaOpen] = useState(false);

    const handleOpenZapisatsa = () => {
        setIsZapisatsaOpen(true);
    };
    

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setIsZapisatsaOpen(false);
    };

    if (!isOpen) return null;

    const handleOpenModal = () => {
        setIsModalOpen(true);
        console.log('Кнопка "Записаться на курс" нажата');
    };

    if (!isOpen) return null;

    return (
        <div className='container0'>
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
            <button className="buttt" onClick={handleOpenZapisatsa}>Записаться на курс</button>
            {isZapisatsaOpen && <Zapisatsa onClose={() => setIsZapisatsaOpen(false)} />}
        </div>
    );
}

export default Podrobnee;
