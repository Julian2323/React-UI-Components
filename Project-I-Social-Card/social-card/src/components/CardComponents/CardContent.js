import React from 'react';
import './Card.css';


const CardContent = props => {
    return (
        <>
        <div className="content-container">
            <h1>Get Started with React</h1>
            <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
            <p className='lite-grey'>reactjs.org</p>
        </div>
        </>
    )
};


export default CardContent;