//экран контакты
import React from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import './Contacts.css'; // Подключаем файл стилей
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';

function Contacts() {
    return (
        <div className="container">
            <div className="main-screen"></div>
            <div className="header">
                <div className="line-top"></div>
                <div className="online-courses">Онлайн-курсы</div>
                <div className="about-courses">О курсах</div>
                <div className="contacts">Контакты</div>
            </div>
            <div className='Zogolovok'>Связаться с нами: </div>
            <div className="rectangle "></div>
            <MailOutlineIcon className="icon1" fontSize="large" />
            <div className='h1'>
                Наша почта:
            </div>
            <div className='h2'>
                onlinelessons@gmail.com
            </div>
            <PhoneIcon className="icon2" fontSize="large"/>
            <div className='h3'>Номер администрации: </div>
            <div className='h4'> +7-(***)-***-**-** </div>
            <WhatsAppIcon className="icon3" fontSize="large"/>
            <div className='h5'>WhatsApp: </div>
            <div className='h6'> +7-(***)-***-**-** </div>
            <TelegramIcon className="icon4" fontSize="large"/>
            <div className='h7'>Telegram: </div>
            <div className='h8'>@onlinelessons</div>
        </div>
    );
}

export default Contacts;

