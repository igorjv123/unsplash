import { GET_IMAGES, GET_IMAGES_SUCCESS, LOAD_IMAGES, LOAD_IMAGES_SUCCESS } from './actionTypes'
import getImagesService from "../../services/imagesService";

export const getImages = (payload) => {
    return{
        // type: GET_IMAGES,
        type: GET_IMAGES_SUCCESS,
        payload
    }
};
export const loadImages = (payload) => {
    return{
        // type: LOAD_IMAGES,
        type: LOAD_IMAGES_SUCCESS,
        payload
    }
}

export const getImagesAsync = (payload) => {
    return dispatch =>
        getImagesService.getImages(payload, 1)
            .then(res => {
                dispatch(getImages(res))
            })
}

export const loadImagesAsync = (payload) => {
    return dispatch =>
        getImagesService.getImages(payload.query, payload.page)
            .then(res => {
                dispatch(loadImages(res))
            });
}
