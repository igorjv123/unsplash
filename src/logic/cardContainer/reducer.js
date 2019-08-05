import defaultState from '../defaultState.js';
import {
    GET_IMAGES_SUCCESS,
    GET_IMAGES_FAILED,
    LOAD_IMAGES_SUCCESS,
    LOAD_IMAGES_FAILED,
    SET_IMAGE
    } from "./actionTypes";

export const getImagesReducer = (state = defaultState.images, action) => {
    const { payload, type } = action;

    switch (type) {
        case GET_IMAGES_SUCCESS: {
            return {...payload};
        }

        case GET_IMAGES_FAILED: {
            return payload;
        }

        case LOAD_IMAGES_SUCCESS:{

            const newState = {...state};
            newState.results = [...newState.results, ...payload.results];

            return {...newState};
        }

        case LOAD_IMAGES_FAILED: {
            return payload;
        }

        default:{
            return state;
        }
    }
}

export const setActiveImage = (state = defaultState.images, action) => {
    const { payload, type } = action;
    switch (type) {
        case SET_IMAGE: {
            return { ...payload }
        }
    
        default: {
            return state;
        }
    }
}

