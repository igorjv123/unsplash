import { all, fork } from "redux-saga/effects";
import getImagesSaga from './header/saga'

export default function* rootSaga() {
    yield all([
        fork(getImagesSaga),
    ])
}
