import { all, fork } from "redux-saga/effects";
import getImagesSaga from './cardContainer/saga'

export default function* rootSaga() {
    yield all([
        fork(getImagesSaga),
    ])
}
