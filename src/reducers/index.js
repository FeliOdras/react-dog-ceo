import { API_CALL_REQUEST, API_CALL_SUCCESS, API_CALL_FAILURE } from '../actions/actionTypes';

const initialState = {
    fetching: false,
    dog: null,
    error: null
};