import { SET_QUERY } from './actionTypes'

const setQuery = (payload) => {
    return{
        type: SET_QUERY,
        payload
    }
};

export default setQuery;