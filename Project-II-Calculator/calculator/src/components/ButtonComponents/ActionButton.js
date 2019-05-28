import React from 'react';
import './Button.css';


const ActionButton = props => {
    return (
        <>
        <h1 className='action'>{props.action}</h1>
        </>
    )
}


export default ActionButton;