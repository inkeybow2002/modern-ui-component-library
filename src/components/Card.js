import React from 'react';
import './Card.css';

const Card = ({ title, children }) => {
    return (
        <div className='ui-card'>
            <h2 className='ui-card-title'>{title}</h2>
            <div className='ui-card-content'>{children}</div>
        </div>
    );
};

export default Card;
