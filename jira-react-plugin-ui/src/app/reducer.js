import * as types from '../commons/actionTypes';

const initialState = {
    AJS: {},
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
    case types.INITIALIZE_AJS:
        return {
            ...state,
            AJS: action.AJS,
        };
    default:
        return state;
    }
};

export default appReducer;
