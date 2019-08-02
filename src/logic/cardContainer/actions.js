import { GET_IMAGES, LOAD_IMAGES } from './actionTypes'

export const getImages = (payload) => {
    return{
        type: GET_IMAGES,
        payload
    }
};
export const loadImages = (payload) => {
    return{
        type: LOAD_IMAGES,
        payload
    }
}
