import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import postList from './modules/postList';
import thunk from 'redux-thunk'

const middlewares = [thunk]; //미들웨어
const rootReducer = combineReducers({postList}); //리듀서 모음들{}
const enhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer, enhancer); // 스토어

export default store;
