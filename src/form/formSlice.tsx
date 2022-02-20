import { createSlice } from "@reduxjs/toolkit";

interface IMakeTodo {
  todo:string,
  id:number,
  completed:boolean,
  style:string
}

//helper function to set todo item object
const makeTodo = (task:string) => {
  return {
    todo: task,
    id: Math.floor(Math.random() * 100000),
    completed: false,
    style:"to-do-item"
  };
};

const initialState:string[] =  window.localStorage.getItem("tasks")
? JSON.parse(localStorage.getItem("tasks") || '{}')! : [];
const options = {
  name:"todo",
  initialState: initialState,
  reducers: {
    addTodo: (state: any, action: { payload: string; }) => {
      let todo:IMakeTodo = makeTodo(action.payload);
      return [...state, todo];
    },
    deleteTodo: (state: any, action: {payload:number;}) => {
      return state.filter((item: { id: number; }) => item.id !== action.payload);
    },
    switchTodo: (state: any, action: { payload:number; }) => {
      return state.map((item: {id:number, completed:boolean}) =>
        item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item
      );
    },
    filterTodo: (state: any) => {
      return state.filter((item: { completed: boolean; }) => !item.completed);
    },
    setTodosToLocalStorage: (state: any) => {
      return state;
    },
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
// selectors
export const selectAllTodos = (state: { allTodo: []; }) => state.allTodo;



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
