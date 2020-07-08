import { combineReducers } from 'redux';
import auth from './auth';
import vessel from './vessel';

export default combineReducers({ auth, vessel });