import { IAction } from './../interfaces/Interfaces';
import { CHANGE_SEARCHFIELD, REQUEST_ROBOTS, SUCCESS_ROBOTS } from './constants';

export const setSearchField = (text : string) : IAction => ({
    type : CHANGE_SEARCHFIELD,
    payload : text
});

export const requestRobots = (link : string) : IAction => ({
    type : REQUEST_ROBOTS,
    link : link
});

export const successRobots = (data : JSON) : IAction => ({
    type : SUCCESS_ROBOTS,
    payload : data
});



