import "./App.css";
import TodoList from "./components/list/TodoList";
import AddTodo from "./components/todo/AddTodo";

function App() {
  return (
    <div className="App">
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
