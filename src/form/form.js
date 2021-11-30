import "./form.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo, filterTodo } from "./formSlice.js";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
export const Form = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    dispatch(addTodo(task));
    e.preventDefault();
    setTask("");
  };
  return (
    <main className="form-div">
      <form className="form-component-div" onSubmit={handleSubmit}>
        <TextField
          name="todo"
          id="outlined-textarea"
          label="Add Task"
          placeholder="Add Task"
          value={task}
          required
          onChange={(e) => setTask((prev) => e.target.value.toUpperCase())}
        ></TextField>
        <div className="form-button-div">
          <Button type="submit" variant="contained" endIcon={<AddIcon />}>
            Add Task
          </Button>
          <Button
            onClick={() => dispatch(filterTodo())}
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
