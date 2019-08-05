import { combineReducers } from 'redux';
import { getImagesReducer, setActiveImage } from './cardContainer/reducer';
import setQueryReducer from './mainSearch/reducer'

const reducer = combineReducers({
    images: getImagesReducer,
    query: setQueryReducer,
    activeImage: setActiveImage
})
export default reducer;