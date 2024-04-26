import React, { useState, useEffect } from 'react';
import './Podrobnee.css';
import Zapisatsa from './Zapisatsa';

function Podrobnee({ isOpen, language, onClose }) {
    const [isZapisatsaOpen, setIsZapisatsaOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(isOpen);


    const handleOpenZapisatsa = () => {
        setIsZapisatsaOpen(true);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            const modalContainer = document.querySelector('.modal-container0');
            if (modalContainer && !modalContainer.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;
    
    const handleCloseModal = () => {
        setIsModalOpen(false);
        onClose();
    };

    return(
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
            <button className="butt55" onClick={handleCloseModal}> &#10006;</button>
            {isZapisatsaOpen && <Zapisatsa onClose={() => setIsZapisatsaOpen(false)} />}
        </div>
    );
}

export default Podrobnee;
