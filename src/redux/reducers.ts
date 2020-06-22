import { IRobot, IAction } from './../interfaces/Interfaces';
import { SUCCESS_ROBOTS, CHANGE_SEARCHFIELD } from './constants';

const initialRobotState = {
    robots : [] as Array<IRobot>
}

const initialSearchState = {
    search : '' as string
}

export const robotReducer = (state = initialRobotState, action: IAction) => {
    switch (action.type) {
        case SUCCESS_ROBOTS : 
            return Object.assign({}, state, {robots : action.payload});
        default :
            return state;
    }
}

export const searchReducer = (state = initialSearchState, action: IAction) => {
    switch (action.type) {
        case CHANGE_SEARCHFIELD : 
            return  Object.assign({}, state, {search : action.payload});
        default : 
            return state;
    }
}
