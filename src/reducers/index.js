import { combineReducers } from 'redux';
import places from './places';
import curPlace from './curPlace';

export default combineReducers({
    places,
    curPlace
})


