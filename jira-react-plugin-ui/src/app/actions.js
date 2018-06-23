import * as types from '../commons/actionTypes';

export const initializeAjs = (AJS) => ({
    type: types.INITIALIZE_AJS,
    AJS,
});