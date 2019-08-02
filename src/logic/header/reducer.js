import defaultState from '../defaultState.js';
import { SET_QUERY } from "./actionTypes";

const setQueryReducer = (state = defaultState.query, action) => {
    const { payload, type } = action;

    switch (type) {
        case SET_QUERY: {
            return payload;
        }

        default:{
            return state;
        }
    }
}

export default setQueryReducer;