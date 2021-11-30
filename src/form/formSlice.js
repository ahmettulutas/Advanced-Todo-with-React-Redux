import { createSlice } from "@reduxjs/toolkit";

//helper function to set todo item object
const makeTodo = (task) => {
  return {
    todo: task,
    id: Math.floor(Math.random() * 100000),
    completed: false
  };
};
const initialState = [];
const options = {
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      return [...state, makeTodo(action.payload)];
    },
    deleteTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    switchTodo: (state, action) => {
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item
      );
    },
    filterTodo: (state, action) => {
      return state.filter((item) => !item.completed);
    }
  }
};
//Redux toolkit to create a slice of reducer
export const formReducer = createSlice(options);
// the lines below replaces the action creators
export const {
  filterTodo,
  addTodo,
  deleteTodo,
  switchTodo
} = formReducer.actions;
export default formReducer.reducer;

// --------------- old model action creators --------------
/*
export const addTask = (task) => {
  const word = makeTodo(task);
  return {
    type: "todo/addTodo",
    payload: word
  };
};
export const deleteTask = (id) => {
  return {
    type: "todo/removeTodo",
    payload: id
  };
};

export const switchTask = (id) => {
  return {
    type: "todo/switchTodo",
    payload: id
  };
};
*/

// --------------------- old model Slicer ---------
/* 
const initialState = [];
export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todo/addTodo":
      return [...state, action.payload];
    case "todo/removeTodo":
      return state.filter((item) => item.id !== action.payload);
    case "todo/switchTodo":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item
      );
    default:
      return state;
  }
};
*/
