import defaultState from '../defaultState.js';
import { GET_COLLECTION_IMAGES, LOAD_COLLECTION_IMAGES} from "./actionTypes";

export const getCollectionImagesReducer = (state = defaultState.collectionImages, action) => {
    const { payload, type } = action;

    switch (type) {
        case GET_COLLECTION_IMAGES: {
            return [...payload];
        }

        case LOAD_COLLECTION_IMAGES:{
            const newState = [...state, ...payload];
            return [...newState];
        }

        default:{
            return state;
        }
    }
}

