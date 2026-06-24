import { useState } from 'react'

function ToDoPage() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const addTodo = () => {
    if (input.trim() === '') return
    setTodos([...todos, { id: Date.now(), text: input, completed: false }])
    setInput('')
  }

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <section className="page-card">
      <span className="page-tag">TO-DO</span>
      <h1>My To-Do List</h1>

      <div className="todo-container">
        <div className="todo-input-section">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            placeholder="Add a task..."
            className="todo-input"
          />
          <button onClick={addTodo} className="todo-add-btn">
            Add
          </button>
        </div>

        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="todo-checkbox"
              />
              <span className={todo.completed ? 'todo-completed' : ''}>
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="todo-delete-btn"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ToDoPage
