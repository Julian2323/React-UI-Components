import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js'
import CardContent from './CardContent.js'



const CardContainer = props => {
    return (
        <>
        <div class="card-container">
        <div className="top-card">
            <CardBanner />
        </div>
        <div className="bottom-card">
            <CardContent />
        </div>
        </div>
        </>
    )
};


export default CardContainer;