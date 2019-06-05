import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

export function* watcherSaga() {
    yield takeLatest('API_CALL_REQUEST', workerSaga);
}