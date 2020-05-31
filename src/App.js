import React from 'react';
import './App.css';
import Counter from './components/Counter/Counter'
import Settings from "./components/Settings/Settings";

class App extends React.Component {
    state = {
        maxValue: 5,
        startValue: 3,
        currentValue: 0
    };

    componentDidMount() {
        this.setState({currentValue: this.state.startValue})
    }

    increaseValue = () => {
        if (this.state.currentValue < this.state.maxValue) {
            this.setState((state) => {
                return {currentValue: state.currentValue + 1}
            });
        }
    };

    resetValue = () => {
        this.setState({currentValue: this.state.startValue})
    };

    changeCurrentValue = (currentValue) => {
        this.setState({currentValue})
    };

    setStartAndMaxValue = (maxValue, startValue) => {
        this.setState({maxValue: maxValue, startValue: startValue, currentValue: startValue})
    };

    render = () => {
        let disableButtonReset = this.state.currentValue === this.state.startValue
            || typeof this.state.currentValue === "string";
        let disableButtonInc = this.state.currentValue >= this.state.maxValue
            || typeof this.state.currentValue === "string";

        return (
            <div className="App">
                <Settings setStartAndMaxValue={this.setStartAndMaxValue}
                          maxValue={this.state.maxValue}
                          startValue={this.state.startValue}
                          changeCurrentValue={this.changeCurrentValue}
                />
                <Counter state={this.state}
                         disableButtonReset={disableButtonReset}
                         disableButtonInc={disableButtonInc}
                         increaseValue={this.increaseValue}
                         resetValue={this.resetValue}
                />
            </div>
        );
    };
}

export default App;
