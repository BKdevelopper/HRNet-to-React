import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Reducer } from '../redux/reducers/currentEmployee'
import { composeWithDevTools } from 'redux-devtools-extension'
const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))
const store = createStore(Reducer, composedEnhancer)
export default store
