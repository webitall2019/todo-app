import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addNewAction } from "../redux/actions";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";
const ToDoItem = () => {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const state = useSelector((store) => store);
  console.log(state);

  const inputHandler = (e) => {
    let toDoText = e.target.value;
    setTodoText(toDoText);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (todoText.length > 2) {
      dispatch(
        addNewAction("ADD", {
          id: parseFloat(Math.random().toFixed(3)),
          todoItem: todoText,
          isDone: false,
          isDisabled: true,
        })
      );
      setTodoText("");
    } else {
      console.error("Length not enough");
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <TextField
        autoFocus
        fullWidth
        label="what to do"
        variant="outlined"
        ref={inputRef}
        type="text"
        name="toDoText"
        id="toDoText"
        value={todoText}
        onChange={(e) => inputHandler(e)}
      />
    </form>
  );
};
export default ToDoItem;
