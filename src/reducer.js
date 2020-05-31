const INCREMENT = 'INCREMENT';
const SET_START_AND_MAX_VALUE = 'SET-START-AND-MAX-VALUE';
const RESET_VALUE = 'RESET-VALUE';
const CHANGE_CURRENT_VALUE = 'CHANGE_CURRENT_VALUE';

let initialState = {
    maxValue: 5,
    startValue: 0,
    currentValue: 0
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {...state, currentValue: state.currentValue + 1};
        case SET_START_AND_MAX_VALUE:
            return {...state, maxValue: action.maxValue, startValue: action.startValue};
        case RESET_VALUE:
            return {...state, currentValue: state.startValue};
        case CHANGE_CURRENT_VALUE:
            return {...state, currentValue: action.currentValue};
        default: return state
    }
};

export const increment = () => ({type: INCREMENT});
export const setStartAndMaxValue = (maxValue, startValue) => ({type:SET_START_AND_MAX_VALUE, maxValue, startValue});
export const resetValue = () => ({type: RESET_VALUE});
export const changeCurrentValue = (currentValue) => ({type: CHANGE_CURRENT_VALUE, currentValue});
