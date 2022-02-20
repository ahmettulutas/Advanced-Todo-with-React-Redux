import "./display.css";
import { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {selectAllTodos} from "../form/formSlice";
import { switchTodo, deleteTodo } from "../form/formSlice";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";

export const DisplayTask = () => {
  const taskstoDisplay = useSelector(selectAllTodos);
  const dispatch = useDispatch();
  useEffect(() => {

      window.localStorage.setItem("tasks", JSON.stringify(taskstoDisplay));
  },[taskstoDisplay]);
  return (
    <main className="to-do-div">
      {taskstoDisplay.map((item, index) => (
        <section id={index} className={item.style}>
          <div className="each-todo-div">
              <p className={
                item.completed
                  ? "to-do-item-each-p-active"
                  : "to-do-item-each-p"
              }>{item.todo}</p>
            <div className="button-div">
              <Button
                size="small"
                startIcon={<DeleteIcon />}
                color="error"
                onClick={() => dispatch(deleteTodo(item.id))}
                variant="outlined"
              ></Button>
              <Button
                size="small"
                variant="outlined"
                color="success"
                startIcon={<CheckIcon />}
                onClick={() => dispatch(switchTodo(item.id))}
              ></Button>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
};
