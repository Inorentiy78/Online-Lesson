import React from 'react';
import './Cards.css'; // Assuming you have a separate CSS file for styling

const Cards = (props) => {
    return (
        <>
        <div className='rectangle-'>
            <p>{props.title}</p> <button className="butn" onClick={props.onClick}>Подробнее</button>
        </div>
                </>
    );
};

export default Cards;
