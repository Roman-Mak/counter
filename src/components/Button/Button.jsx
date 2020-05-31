import React from 'react';
import style from './Button.module.css'


const Button = (props) => {
    return (
        <button className={style.button} disabled={props.isDisabled} onClick={props.onClickFn}>{props.name}</button>
    )
};

export default Button;
