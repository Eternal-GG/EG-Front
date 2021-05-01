import {combineReducers} from 'redux';
import auth from './auth';
import game from './game';

const rootReducer = combineReducers({
    auth, game
});

export default rootReducer;