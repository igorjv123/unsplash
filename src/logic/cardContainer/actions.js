import { GET_IMAGES_SUCCESS, LOAD_IMAGES_SUCCESS, SET_IMAGES } from './actionTypes'
import getImagesService from "../../services/imagesService";

const getImages = (payload) => {
    return {
        type: GET_IMAGES_SUCCESS,
        payload
    }
};

const loadImages = (payload) => {
    return {
        type: LOAD_IMAGES_SUCCESS,
        payload
    }
};

export const setImages = () => {
    return {
        type: SET_IMAGES
    }
}

export const getImagesAsync = (payload) => {
    return dispatch =>
        getImagesService.getImages(payload, 1)
            .then(res => {
                dispatch(getImages(res))
            })
};

export const loadImagesAsync = (payload) => {
    return dispatch =>
        getImagesService.getImages(payload.query, payload.page)
            .then(res => {
                dispatch(loadImages(res))
            });
}
