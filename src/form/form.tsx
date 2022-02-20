import "./form.css";
import { useDispatch } from "react-redux";
import { useState, useRef } from "react";
import { addTodo, filterTodo } from "./formSlice";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
import React from "react";

export const Form = () => { 
  const [task, setTask] = useState<string>("");
  let inputRef = useRef<HTMLDivElement>();
  const dispatch = useDispatch();
  
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo(task));
    setTask("");
    inputRef.current!.focus();
  };

  return (
    <main className="form-div">
      <form className="form-component-div" onSubmit={handleSubmit}>
        <TextField
          className="textfield"
          inputRef={inputRef}
          name="todo"
          id="outlined-textarea"
          label="Add Task"
          placeholder="Add Task"
          value={task}
          required
          onChange={(e) => setTask(e.target.value.toUpperCase())}
        ></TextField>
        <div className="form-button-div">
          <Button type="submit" variant="contained" endIcon={<AddIcon />}>
            Add Task
          </Button>
          <Button
            onClick={dispatch(filterTodo)}
            variant="contained"
            endIcon={<DeleteIcon />}
          >
            Delete Completed
          </Button>
        </div>
      </form>
    </main>
  );
};
