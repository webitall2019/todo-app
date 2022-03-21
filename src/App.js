import ToDolist from "./component/ToDoList";
import ToDoItem from "./component/ToDoItem";
import { Box, Container } from "@mui/material";
import Header from "./component/header/Header";
import "./styles/App.css";

function App() {
  return (
    <Container maxWidth="md" sx={{ paddingTop: "40px" }}>
      <Box className="App" sx={{ flexDirection: "row" }}>
        <Header />
        <ToDoItem />
        <ToDolist />
      </Box>
    </Container>
  );
}

export default App;
