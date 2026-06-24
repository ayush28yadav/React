const input = document.getElementById("input");
const button = document.getElementById("add");
const list = document.getElementById("list");

button.addEventListener("click", () => {
  const text = input.value;

  if (text === "") return;

  const li = document.createElement("li");
  li.innerText = text;

  list.appendChild(li);

  input.value = "";
});


///////////////////////////////////////////////////////////////////////

<!-- import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  function addTask() {
    setTasks([...tasks, input]);
    setInput("");
  }

  return (
    <>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      {tasks.map((task, i) => (
        <li key={i}>{task}</li>
      ))}
    </>
  );
} -->