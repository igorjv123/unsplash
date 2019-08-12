import { combineReducers } from 'redux';
import { getImagesReducer } from './cardContainer/reducer';
import setQueryReducer from './mainSearch/reducer'
import {imagePageReducer} from "./imagePage/reducer";

const reducer = combineReducers({
    images: getImagesReducer,
    query: setQueryReducer,
    activeImage: imagePageReducer,

})
export default reducer;