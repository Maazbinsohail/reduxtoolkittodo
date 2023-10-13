import "./App.css";
import AddTodo from "./components/AddTodo";
import SimpleTodo from "./components/SimpleTodo";

function App() {
  return (
    <>
      <h1 className="text-3xl text-white hover:underline capitalize ">Todo with redux tool kit </h1>
      <AddTodo />
      <SimpleTodo />
    </>
  );
}

export default App;
