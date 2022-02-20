// ------------ new way of creating store -----------
import formReducer from "./form/formSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    allTodo: formReducer
  }
});
export default store;

// ------------ old way of creating store -----------
/* import { createStore, combineReducers } from "redux";

export const store = createStore(
  combineReducers({
    allTodo: formReducer.reducer,
    searchTerm: searchTermReducer.reducer
  })
);
*/
