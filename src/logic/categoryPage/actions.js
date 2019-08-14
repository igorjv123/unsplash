import { GET_COLLECTION_IMAGES, LOAD_COLLECTION_IMAGES } from './actionTypes'
import collectionsService from "../../services/collectionsService";

const getImages = (payload) => {
    return {
        type: GET_COLLECTION_IMAGES,
        payload
    }
};

const loadImages = (payload) => {
    return {
        type: LOAD_COLLECTION_IMAGES,
        payload
    }
};

export const getCategoryPhotosAsync = (id) => {
    return dispatch => {
        collectionsService.getCollectionPhotos(id, 1, 10)
            .then(res => {
                console.log(res)
                dispatch(getImages(res))
            })
    }
};

export const loadMoreCategoryPhotosAsync = (payload) => {
    return dispatch =>
        collectionsService.getCollectionPhotos(payload.id, payload.page)
            .then(res => {
                dispatch(loadImages(res))
            });
}
