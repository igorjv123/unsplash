import { put, all, takeLatest } from 'redux-saga/effects';
import {
    GET_IMAGES,
    GET_IMAGES_SUCCESS,
    GET_IMAGES_FAILED,
    LOAD_IMAGES,
    LOAD_IMAGES_SUCCESS,
    LOAD_IMAGES_FAILED
} from "./actionTypes";

 import getImagesService from '../../services/imagesService'

function* getImages(action) {
    try {
        const { payload } = action
        const data = yield getImagesService.getImages(payload, 1);
        yield put({
            type: GET_IMAGES_SUCCESS,
            payload: data
        });
    }catch (err) {
        yield put({
            type: GET_IMAGES_FAILED,
            payload: err.message
        });
    }
}

function* loadImages(action) {
    try {
        const { payload } = action
        const data = yield getImagesService.getImages(payload.query, payload.page)

        yield put({
            type: LOAD_IMAGES_SUCCESS,
            payload: data
        });
    }catch (err) {
        yield put({
            type: LOAD_IMAGES_FAILED,
            payload: err.message
        });
    }
}


export default function* getImagesSaga() {
    yield all([
        takeLatest(GET_IMAGES, getImages),
        takeLatest(LOAD_IMAGES, loadImages)
    ])
}