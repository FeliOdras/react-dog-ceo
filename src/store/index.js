import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from '../saga';
import { reducer } from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const reduxDevTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(
    reducer,
    compose(applyMiddleware(sagaMiddleware), reduxDevTools)
)

sagaMiddleware.run(watcherSaga);

