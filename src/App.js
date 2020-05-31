import React from 'react';
import './App.css';
import Counter from './components/Counter/Counter'
import Settings from "./components/Settings/Settings";
import {connect} from 'react-redux'
import {changeCurrentValue, increment, resetValue, setStartAndMaxValue} from "./reducer";

class App extends React.Component {
    // state = {
    //     maxValue: 5,
    //     startValue: 0,
    //     currentValue: 0
    // };

    // componentDidMount() {
    //     // this.setState({currentValue: this.state.startValue})
    //     this.props.resetValue();
    // }

    increaseValue = () => {
        this.props.increment();
        // if (this.state.currentValue < this.state.maxValue) {
        //     this.setState((state) => {
        //         return {currentValue: state.currentValue + 1}
        //     });
        // }
    };

    resetValue = () => {
        // this.setState({currentValue: this.state.startValue})
        this.props.resetValue();
    };

    changeCurrentValue = (currentValue) => {
        // this.setState({currentValue})
        this.props.changeCurrentValue(currentValue);
    };

    setStartAndMaxValue = (maxValue, startValue) => {
        // this.setState({maxValue: maxValue, startValue: startValue, currentValue: startValue})
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
                          changeCurrentValue={this.changeCurrentValue}
                />
                <Counter {...this.props}
                         disableButtonReset={disableButtonReset}
                         disableButtonInc={disableButtonInc}
                         increaseValue={this.increaseValue}
                         resetValue={this.resetValue}
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
