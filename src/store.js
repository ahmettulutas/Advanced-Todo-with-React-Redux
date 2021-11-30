import { createStore, combineReducers } from "redux";
import formReducer from "./form/formSlice.js";
import { configureStore } from "@reduxjs/toolkit";
// ------------ new way of creating store -----------

const store = configureStore({
  reducer: {
    allTodo: formReducer
  }
});
export default store;

// ------------ old way of creating store -----------
/*
export const store = createStore(
  combineReducers({
    allTodo: formReducer.reducer,
    searchTerm: searchTermReducer.reducer
  })
);
*/
