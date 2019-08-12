import { GET_IMAGE_BY_ID, SET_ACTIVE_IMAGE } from './actionTypes'
import getImagesService from "../../services/imagesService";
import { setImages } from '../cardContainer/actions';


const getImageById = (payload) => {
    return {
        type: GET_IMAGE_BY_ID,
        payload
    }
};

export const setActiveImage = () => {
    return {
        type: SET_ACTIVE_IMAGE
    }
}


export const getImageByIdAsync = (payload) => {
    return dispatch => {
        return getImagesService.getImageById(payload)
            .then(res => {
                dispatch(getImageById(res))
                dispatch(setImages())
            });
    }
}
