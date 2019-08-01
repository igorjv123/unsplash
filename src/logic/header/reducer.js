import defaultState from '../defaultState.js';
import { GET_IMAGES_SUCCESS, GET_IMAGES_FAILED} from "./actionTypes";

const getImagesReducer = (state = defaultState.images, action) => {
    const { payload, type } = action;
    // console.log(action)
    switch (type) {
        case GET_IMAGES_SUCCESS: {
            return {...payload};
        }
        case GET_IMAGES_FAILED: {
            return payload;
        }
        default:{
            return state;
        }
    }
}

export default getImagesReducer;