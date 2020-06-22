import { put, takeEvery } from 'redux-saga/effects';
import robotsApiCall from './../api/robotsApi';
import { successRobots } from './../redux/actions';
import { REQUEST_ROBOTS } from './../redux/constants';
import { IAction } from '../interfaces/Interfaces';

function* fetchRobots(action : IAction){
    try{
        const robots : JSON = yield robotsApiCall(action.link!);
        yield put(successRobots(robots));
    } catch (e) {
        throw new Error('Api saga failed')
    }
}

function* robotsSaga(){
    yield takeEvery(REQUEST_ROBOTS, fetchRobots);
}

export default robotsSaga;