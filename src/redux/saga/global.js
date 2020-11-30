import {all, takeEvery,call, put} from 'redux-saga/effects';
import {DO_LOGIN, SET_TOKEN} from '../action-type';
import API from '@/api/index';


function* login(action){
    const res = yield call(API.login,action.payload);
    put({type:SET_TOKEN,payload:res.token});
}





export default function* root(){
    yield all([
        takeEvery(DO_LOGIN,login),
    ]);
}