import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from '../saga';
import { reducer } from '../reducers';

