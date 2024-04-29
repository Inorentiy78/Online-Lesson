//экран контакты
import React, { useState } from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import './Contacts.css'; // Подключаем файл стилей
import Header from './Header';

function Contacts() { 

    const [isPanelVisible, setPanelVisible] = useState(false);

const togglePanel = () => {
    setPanelVisible(!isPanelVisible);
};

const handleToggle = (panelId) => {
    const panel = document.getElementById(panelId);
    if (panel) {
        panel.classList.toggle('show');
    }
};
    return (
        <div className="container2">
            <div className="main-screen2"></div>
            <Header/>
            <div className='Zogolovok0'>Связаться с нами: </div>
            <div className="rectangle "></div>
            <div className='h1'>Наша почта: onlinelessons@gmail.com</div>
            <div className='h2'>Номер администрации:    +7-(***)-***-**-** </div>
            <div className='h3'>WhatsApp:   +7-(***)-***-**-** </div>
            <div className='h4'>Telegram:   @onlinelessons </div>
        </div>
    );
}

export default Contacts;

