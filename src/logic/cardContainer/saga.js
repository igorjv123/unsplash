import { call, put, all, takeLatest } from 'redux-saga/effects';
import {
    GET_IMAGES,
    GET_IMAGES_SUCCESS,
    GET_IMAGES_FAILED,
    LOAD_IMAGES,
    LOAD_IMAGES_SUCCESS,
    LOAD_IMAGES_FAILED
} from "./actionTypes";

const Unsplash = require('unsplash-js').default;

const ACCESS_KEY = 'fc6a80d90e77dc9c5176a86a7d2f1b0fca4616fb13c7a316369ca51f6abf9254';
const SECRET_KEY = 'a487d6fde28a3ce1b0f83c564273f3b66858d24ba5e38fc2e5436ca260cda67f';

const unsplash = new Unsplash({
    applicationId: ACCESS_KEY,
    secret: SECRET_KEY
});

function* getImages(action) {
    try {
        const { payload } = action
        const data = yield unsplash.search.photos(payload, 1)
            .then(res=>res.json())
            .catch(err=>console.log(err));

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
        const data = yield unsplash.search.photos(payload.query, payload.page)
            .then(res=>res.json())
            .catch(err=>console.log(err));
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