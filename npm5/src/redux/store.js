import { createStore, applyMiddleware, combineReducers } from 'redux'
// applyMiddleware
import ceshi2 from './reducers/ceshi'

import thunk from 'redux-thunk'

const allReducer = combineReducers({
  he: ceshi2
})

//applyMiddleware(thunk)为了配置异步
export default createStore(allReducer, applyMiddleware(thunk))