import { GET_IMAGES } from './actionTypes'

const getImages = (payload) => {
    return{
        type: GET_IMAGES,
        payload
    }
};

export default getImages;