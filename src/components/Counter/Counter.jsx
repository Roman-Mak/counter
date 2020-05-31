import React from 'react';
import style from './Counter.module.css'
import Button from "../Button/Button";
import CounterValue from "./CounterValue/CounterValue";

const Counter = (props) => {
    return (
        <div className={style.counter}>
            <CounterValue currentValue={props.state.currentValue} maxValue={props.state.maxValue}/>
            <div className={style.buttons}>
                <Button isDisabled={props.disableButtonInc}
                        name={"INCREMENT"}
                        onClickFn={props.increaseValue}/>
                <Button isDisabled={props.disableButtonReset}
                        name={"RESET"}
                        onClickFn={props.resetValue}/>
            </div>
        </div>
    )
};

export default Counter;
