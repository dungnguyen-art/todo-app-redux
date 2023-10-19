//===========================Redux Core=================================
// import { legacy_createStore } from "redux";
// import rootReducer from './reducer' ;
// import { composeWithDevTools } from 'redux-devtools-extension'
// const composedEnhancers = composeWithDevTools();
// const store = legacy_createStore(rootReducer, composedEnhancers);
// export default store;
//===========================Redux Toolkit==============================
import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "../components/Filters/filtersSlice";
import TodosSlice from "../components/TodoList/TodosSlice";
const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    todoList: TodosSlice.reducer,
  },
});

export default store;
