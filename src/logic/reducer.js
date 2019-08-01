import { combineReducers } from 'redux';
import getImagesReducer from './header/reducer';

const reducer = combineReducers({
    images: getImagesReducer,
})
export default reducer;