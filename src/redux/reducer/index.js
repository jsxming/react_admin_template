import { combineReducers, } from 'redux';
import {test,user,token} from './global';

const CombineReducers = combineReducers({
    test,
    user,
    token
});

export default CombineReducers;
