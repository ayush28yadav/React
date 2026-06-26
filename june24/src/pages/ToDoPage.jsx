import { useState } from "react";
import "../App.css";

function ToDoPage() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [search, setSearch] = useState("");
  const [activeTodo, setActiveTodo] = useState(null);

  function addTodo() {
    if (task.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
      starred: false,
    };

    setTodos([...todos, newTodo]);
    setTask("");
  }

  function toggleComplete(id) { 
    setActiveTodo(id);
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );

    setTimeout(() => {
      setActiveTodo((current) => (current === id ? null : current));
    }, 220);
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function toggleStar(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, starred: !todo.starred }
          : todo
      )
    );
  }

  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;
  const incomplete = total - completed;

  const filteredTodos = todos
    .filter((todo) =>
      todo.text.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => b.starred - a.starred);

  return (
    <div className="container todo-page-container">
      <h1>Todo List</h1>

      {/* Input */}
      <div className="todo-page-input-group">
        <input
          value={task}
          onChange={(e) => {
            if(e.target.value.length < 10){
              setTask(e.target.value)
            }
          }}
          placeholder="Add a new task"
        />
        <button
          className="todo-page-button todo-page-add-button"
          onClick={addTodo}
        >
          Add task
        </button>
      </div>

      {/* Stats */}
      <div className="todo-page-stats">
        <p>Total: {total}</p>
        <p>Completed: {completed}</p>
        <p>Incomplete: {incomplete}</p>
      </div>

      {/* Todos */}
      <div className="todo-page-list">
        {filteredTodos.map((todo) => (
          <div className={`todo-page-item ${todo.completed ? "todo-page-item--completed" : ""}`} key={todo.id}>
            <span
              onClick={() => toggleComplete(todo.id)}
              className={`todo-page-item-text ${
                todo.completed ? "todo-page-item-text--done" : ""
              } ${
                activeTodo === todo.id ? "todo-page-item-text--clicked" : ""
              }`}
            >
              {todo.text}
            </span>

            <div>
              <button
                className="todo-page-button todo-page-button--icon todo-page-button--star"
                onClick={() => toggleStar(todo.id)}
              >
                {todo.starred ? "⭐" : "☆"}
              </button>

              <button
                className="todo-page-button todo-page-button--danger"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))} 
      </div>

      {/* Search */}
      <input
        className="todo-page-search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search tasks..."
      />
    </div>
  );
}

export default ToDoPage;