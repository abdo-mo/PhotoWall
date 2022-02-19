import counterReducer from './counter';
import loggedReducer from './isLogged';
import PhotoReducer from './photoReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter:counterReducer,
    isLogged:loggedReducer,
    photoList:PhotoReducer
})
export default allReducers;