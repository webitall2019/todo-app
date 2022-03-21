import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Checkbox } from "@mui/material";
import { deleteAction } from "../redux/actions";
import { Box, Container } from "@mui/material";

export default function ToDoList() {
  const state = useSelector((store) => store);
  const dispatch = useDispatch();

  const checkboxHandler = (todo) => {
    console.log(todo.isDone);
    dispatch({
      type: "CHECKED",
      payload: { ...todo, isDone: !todo.isDone },
    });
  };

  const deleteHandler = (todo) => {
    const updatedState = state.filter((el) => el.id !== todo.id);
    dispatch(deleteAction("DELETE", updatedState));
  };
  console.log(state.length);
  return (
    <>
      {state.map((todo, index) => {
        console.log(todo.id);
        return (
          <Container sx={{ display: "flex" }} key={`${todo.id}`}>
            <Box
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
                display: "flex",
                width: "100%",
              }}
              key={index}
              className="todo-item"
            >
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                onChange={() => {
                  checkboxHandler(todo);
                }}
                checked={todo.isDone}
              />
              <p className={todo.isDone ? "checked" : null}>{todo.todoItem}</p>
              <div>
                <Button
                  variant="contained" 
                  color="error"
                  onClick={() => deleteHandler(todo)}
                >
                  DELETE
                </Button>
              </div>
            </Box>
          </Container>
        );
      })}
      {state.length === 0 ? (
        <h3 style={{ textAlign: "center" }}>Empty ToDo list</h3>
      ) : (
        " "
      )}
    </>
  );
}
