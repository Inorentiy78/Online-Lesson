import React, { useState, useEffect } from 'react';
import './Zapisatsa.css';

function Zapisatsa({ isOpen, onClose, language }) {
    const [isModalOpen, setIsModalOpen] = useState(isOpen);

    useEffect(() => {
        const handleClickOutside = (event) => {
            const modalContainer = document.getElementById('modalContainer');
            if (modalContainer && !modalContainer.contains(event.target)) {
                setIsModalOpen(false);
                onClose();
            }
        };

        if (isModalOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isModalOpen, onClose]);

    const handleCloseModal = () => {
        setIsModalOpen(false);
        onClose();
    };

    return (
        <>
            <div className='overlay'>
                <div className='modal-container'>
                    <div className="rectangle01"></div>
                    <div className="line-top01"></div>
                    <div className='nazvanie0'></div> 
                    <div className='inputs'>
                        <input type="text" className="FIO-input" placeholder="Введите ФИО" />
                        <input type="text" className="Poshta-input" placeholder="Введите почту" />
                        <input type="text" className="Namber-input" placeholder="Введите номер телефона" />
                    </div>
                    <div className='textt'>Выбранный язык: </div>
                    <div className='textt1'>{language} </div>
                    <div className='textt2'> Тип обучения: </div>
                    <select className="custom-select">
                        <option value="self-study">Самообучение</option>
                        <option value="with-teacher">С преподавателем</option>
                    </select>
                    <button className="buttt9">Отправить заявку</button>
                    <button className="butt" onClick={handleCloseModal}> &#10006;</button>
                </div>
            </div>
        </>
    );
}

export default Zapisatsa;
