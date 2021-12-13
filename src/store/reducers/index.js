import { combineReducers } from 'redux';
import auth from './authReducer';

const appReducers = combineReducers({
    auth
})

export default appReducers;