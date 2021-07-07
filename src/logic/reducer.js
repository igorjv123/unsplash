import { combineReducers } from 'redux';
import { getImagesReducer } from './cardContainer/reducer';
import setQueryReducer from './mainSearch/reducer'
import {imagePageReducer} from "./imagePage/reducer";
import {getCollectionImagesReducer} from "./categoryPage/reducer";

const reducer = combineReducers({
    images: getImagesReducer,
    query: setQueryReducer,
    activeImage: imagePageReducer,
    collectionImages: getCollectionImagesReducer

})
export default reducer;