import { createStore, combineReducers, applyMiddleware} from 'redux';
import { robotReducer, searchReducer } from './reducers';
import createSagaMiddleware from 'redux-saga'
import robotsSaga from './../saga/sagas';

const reducer = combineReducers({robotRed : robotReducer, searchRed : searchReducer});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware)); 
sagaMiddleware.run(robotsSaga);

export default store;
