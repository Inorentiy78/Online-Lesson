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

