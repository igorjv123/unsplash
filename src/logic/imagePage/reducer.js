import defaultState from '../defaultState.js';
import { GET_IMAGE_BY_ID, SET_ACTIVE_IMAGE } from "./actionTypes";

export const imagePageReducer = (state = defaultState.activeImage, action) => {
    const { payload, type } = action;
    switch (type) {
        case GET_IMAGE_BY_ID: {
            return {...payload};
        }
        case SET_ACTIVE_IMAGE: {
            return {}
        }
        default:{
            return state;
        }
    }
}
