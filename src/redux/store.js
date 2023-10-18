import { legacy_createStore } from "redux";
import rootReducer from './reducer' ;
import { composeWithDevTools } from 'redux-devtools-extension'
const composedEnhancers = composeWithDevTools();
const store = legacy_createStore(rootReducer, composedEnhancers);
export default store;