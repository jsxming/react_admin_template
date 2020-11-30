/*
 * @Author: 小明～
 * @Descript: redux 数据持久化到本地
 * @Date: 2020-04-16 20:06:07
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-08-03 11:27:23
 */
import { persistReducer,persistStore, } from 'redux-persist';
import rootReducer from '@/redux/reducer/index';
import storage from 'redux-persist/lib/storage';
import { createStore, applyMiddleware, } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '@/redux/saga/index';


const persistConfig = {
    key: 'root',
    storage: storage,
};

const rootReducers  = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducers,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;