import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

export function* watcherSaga() {
    yield takeLatest('API_CALL_REQUEST', workerSaga);
}

function fetchDog() {
    return axios({
        method: "get",
        url: "https://dog.ceo/api/breeds/image/random"
    })
}