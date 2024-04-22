import React, { useState,useEffect } from 'react';
import './Zapisatsa.css';

function Zapisatsa({ onClose }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleCloseModal = () => {
        setIsOpen(false);
        onClose();
    };

    // Добавляем код для вывода в консоль информации о том, что компонент открыт
    useEffect(() => {
        console.log('Компонент Zapisatsa открыт:', isOpen);
    }, [isOpen]);
    
    return (
        <>
            {isOpen && (
                <div className='modal-container'>
                    <div className="modal-content">
                        <div className="rectangle01"></div>
                        <div className="line-top01"></div>
                        <div className='nazvanie0'>Записаться на курс</div>
                        <button className="butt">Записаться на курс</button>
                        <div className='inputs'>
                            <input type="text" className="FIO-input" placeholder="Введите ФИО" />
                            <input type="text" className="Poshta-input" placeholder="Введите почту" />
                            <input type="text" className="Namber-input" placeholder="Введите номер телефона" />
                        </div>
                        <div className='textt'>Выбранный язык: </div>
                        <div className='textt1'>Казахский язык </div>
                        <div className='textt2'> Тип обучения: </div>
                        <select className="custom-select">
                            <option value="self-study">Самообучение</option>
                            <option value="with-teacher">С преподавателем</option>
                        </select>
                        <button className="butt" onClick={handleCloseModal}>Закрыть</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Zapisatsa;
