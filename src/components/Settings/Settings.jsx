import React from 'react';
import style from './Settings.module.css'
import Button from "../Button/Button";

class Settings extends React.Component {
    state = {
        startValue: this.props.startValue,
        maxValue: this.props.maxValue,
        isButtonDisabled: false,
        isValuesCorrect: true
    };

    buttonDisable = (isButtonDisabled) => {
        this.setState({isButtonDisabled})
    };

    checkSetting = () => {
        let text = "";
        if (this.state.startValue < 0 || this.state.startValue >= this.state.maxValue) {
            text = "Incorrect value!";
            this.buttonDisable(true);
            this.setState({isValuesCorrect: false})
        } else {
            text = "Enter values and press SET";
            this.buttonDisable(false);
            this.setState({isValuesCorrect: true})
        }
        this.props.changeCurrentValue(text);
    };

    onChangeMaxValue = (e) => {
        let value = Number(e.currentTarget.value);
        this.setState({maxValue: value}, this.checkSetting);
    };

    onChangeStartValue = (e) => {
        let value = Number(e.currentTarget.value);
        this.setState({startValue: value}, this.checkSetting);
    };

    setStartAndMaxValue = () => {
        this.props.setStartAndMaxValue(this.state.maxValue, this.state.startValue);
    };

    render = () => {
        let inputStyle = this.state.isValuesCorrect ? "input" : "err";
        return (
            <div className={style.settings}>
                <div className={style.inputs}>
                    <div>
                        <label>Max value: <input className={style[inputStyle]} onChange={this.onChangeMaxValue}
                                                 value={this.state.maxValue}
                                                 type={"number"}/>
                        </label>
                    </div>
                    <div>
                        <label>Start value: <input className={style[inputStyle]} onChange={this.onChangeStartValue}
                                                   value={this.state.startValue}
                                                   type={"number"}/>
                        </label>
                    </div>
                </div>
                <div className={style.button}>
                    <Button name="SET" onClickFn={this.setStartAndMaxValue} isDisabled={this.state.isButtonDisabled}/>
                </div>
            </div>
        )
    }
}

export default Settings;
