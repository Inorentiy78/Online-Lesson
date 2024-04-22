//экран контакты
import React from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import './Contacts.css'; // Подключаем файл стилей

function Contacts() {
    return (
        <div className="container2">
            <div className="main-screen2"></div>
            <div className="header2">
                <div className="line-top2"></div>
                <div className="online-courses2">Онлайн-курсы</div>
                <div className="about-courses2">О курсах</div>
                <div className="contacts2">Контакты</div>
            </div>
            <div className='Zogolovok0'>Связаться с нами: </div>
            <div className="rectangle "></div>
            <div className='h1'>
                Наша почта:
            </div>
            <div className='h2'>
                onlinelessons@gmail.com
                
            </div>
            <div className='h3'>Номер администрации: </div>
            <div className='h4'> +7-(***)-***-**-** </div>
            <div className='h5'>WhatsApp: </div>
            <div className='h6'> +7-(***)-***-**-** </div>
            <div className='h7'>Telegram: </div>
            <div className='h8'>@onlinelessons</div>
        </div>
    );
}

export default Contacts;

