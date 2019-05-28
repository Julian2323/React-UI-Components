import React from 'react';
import './Display.css';
import CalculatorDisplay from './CalculatorDisplay.js';
import ActionButton from '../ButtonComponents/ActionButton.js';
import NumberButton from '../ButtonComponents/NumberButton.js';
import ClearButton from '../ButtonComponents/ClearButton.js';

const CalculatorContainer = props => {
    return (
        <>
        <div className='container'>
            <div className='answer'>
            < CalculatorDisplay total='0' />
            </div>
            <div className='row'>
            < ClearButton className='clear-button' filler='clear' />
            < ActionButton className='action' action='/' />
            </div>
            <div className='row'>
            < NumberButton className='blah' number='7' />
            < NumberButton className='number' number='8' />
            < NumberButton className='number' number='9' />
            < ActionButton className='action' action='X' />            
            </div>
            <div className='row'>
            < NumberButton className='number' number='4' />
            < NumberButton className='number' number='5' />
            < NumberButton className='number' number='6' />
            < ActionButton className='action' action='-' /> 
            </div>
            <div className='row'>
            < NumberButton className='number' number='1' />
            < NumberButton className='number' number='2' />
            < NumberButton className='number' number='3' />
            < ActionButton className='action' action='+' />
            </div>
            <div className='row'>
            < ClearButton filler='0' />
            < ActionButton className='action' action='=' />
            </div>

        
        </div>
        </>
    )
}



export default CalculatorContainer;