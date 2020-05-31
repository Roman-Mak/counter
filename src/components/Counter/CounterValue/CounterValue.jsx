import React from 'react';
import style from './CounterValue.module.css'

const CounterValue = (props) => {
    let displayStyle = "display";
    if (props.currentValue === props.maxValue) {
        displayStyle = "lastValue";
    } else if (props.currentValue === "Incorrect value!") {
        displayStyle = "error"
    } else if (props.currentValue === "Enter values and press SET") {
        displayStyle = "enter";
    }
    return (
        <div className={style.counter}>
            <span className={style[displayStyle]}>{props.currentValue}</span>
        </div>
    )
};

export default CounterValue;
