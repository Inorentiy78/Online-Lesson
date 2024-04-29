import React, { useState } from 'react';
import './Zapisatsa.css';

function Zapisatsa({ isOpen, onClose, language }) {
  const [fio, setFIO] = useState(''); // Add state for full name (FIO)
  const [poshta, setPoshta] = useState(''); // Add state for email (poshta)
  const [namber, setNamber] = useState(''); // Add state for phone number (namber)

  const handleSendRequest = async () => {
    const user = {
      name: fio, // Use the full name from state
      email: poshta, // Use the email from state
      phoneNumber: namber // Use the phone number from state
    };
  
    console.log('Данные пользователя для отправки:', user); // Вывод данных перед отправкой
  
    try {
      const response = await fetch('https://localhost:7045/api/User/ReceiveUserData', {
        method: 'POST', // Используйте метод POST для отправки данных
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
  
      if (!response.ok) {
        throw new Error('Ошибка при отправке данных');
      }
  
      console.log('Данные успешно отправлены');
    } catch (error) {
      console.error('Произошла ошибка!', error);
    }
  };
  

  const handleCloseModal = () => {
    onClose();
  };

  return (
    <>
      <div className='overlay'>
        <div className='modal-container'>
          <div className="rectangle01"></div>
          <div className="line-top01"></div>
          <div className='nazvanie0'>Английский язык</div>
          <div className='inputs'>
            <input
              type="text"
              className="FIO-input"
              placeholder="Введите ФИО"
              value={fio}
              onChange={(e) => setFIO(e.target.value)}
            />
            <input
              type="text"
              className="Poshta-input"
              placeholder="Введите почту"
              value={poshta}
              onChange={(e) => setPoshta(e.target.value)}
            />
            <input
              type="text"
              className="Namber-input"
              placeholder="Введите номер телефона"
              value={namber}
              onChange={(e) => setNamber(e.target.value)}
            />
          </div>
          <div className='textt'>Выбранный язык: </div>
                    <div className='textt1'>Английский язык </div>
                    <div className='textt2'> Тип обучения: </div>
                    <select className="custom-select">
                        <option value="self-study">Самообучение</option>
                        <option value="with-teacher">С преподавателем</option>
                    </select>
          <button className="buttt9" onClick={handleSendRequest}>Отправить заявку</button>
          <button className="butt" onClick={handleCloseModal}> &#10006;</button>
        </div>
      </div>
    </>
  );
}

export default Zapisatsa;
