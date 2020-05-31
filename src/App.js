import React from 'react';
import './App.css';
import Counter from './components/Counter/Counter'
import Settings from "./components/Settings/Settings";
import {connect} from 'react-redux'
import {changeCurrentValue, increment, resetValue, setStartAndMaxValue} from "./reducer";

class App extends React.Component {
    setStartAndMaxValue = (maxValue, startValue) => {
        this.props.setStartAndMaxValue(maxValue, startValue);
        this.props.resetValue();
    };

    render = () => {
        let disableButtonReset = this.props.currentValue === this.props.startValue
            || typeof this.props.currentValue === "string";
        let disableButtonInc = this.props.currentValue >= this.props.maxValue
            || typeof this.props.currentValue === "string";

        return (
            <div className="App">
                <Settings setStartAndMaxValue={this.setStartAndMaxValue}
                          maxValue={this.props.maxValue}
                          startValue={this.props.startValue}
                          changeCurrentValue={this.props.changeCurrentValue}
                />
                <Counter maxValue={this.props.maxValue}
                         currentValue={this.props.currentValue}
                         disableButtonReset={disableButtonReset}
                         disableButtonInc={disableButtonInc}
                         increaseValue={this.props.increment}
                         resetValue={this.props.resetValue}
                />
            </div>
        );
    };
}

let mapStateToProps = (state) => {
    return {
        maxValue: state.maxValue,
        startValue: state.startValue,
        currentValue: state.currentValue
    }
};

export default connect(mapStateToProps, {increment, setStartAndMaxValue, resetValue, changeCurrentValue})(App);
