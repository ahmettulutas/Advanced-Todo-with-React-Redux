import "./display.css";
import { useSelector, useDispatch } from "react-redux";
import { selectAllTodos } from "./displaySlice.js";
import { switchTodo, deleteTodo } from "../form/formSlice.js";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";

export const DisplayTask = () => {
  const taskstoDisplay = useSelector(selectAllTodos);
  const dispatch = useDispatch();

  return (
    <main className="to-do-div">
      {taskstoDisplay.map((item) => (
        <section className="to-do-item">
          <div className="each-todo-div">
            <div
              className={
                item.completed
                  ? "to-do-item-each-p-active"
                  : "to-do-item-each-p"
              }
            >
              <p>{item.todo}</p>
            </div>
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
