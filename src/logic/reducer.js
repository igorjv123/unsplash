import { combineReducers } from 'redux';
import getImagesReducer from './cardContainer/reducer';
import setQueryReducer from './header/reducer'

const reducer = combineReducers({
    images: getImagesReducer,
    query: setQueryReducer,
})
export default reducer;