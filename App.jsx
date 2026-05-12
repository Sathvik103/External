import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  // add task
  const addTask = () => {
    if (task !== "") {
      setList([...list, task]);
      setTask("");
    }
  };

  // delete task
  const deleteTask = (index) => {
    let newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  return (
    <div>

      <h2>TODO App</h2>

      {/* input */}
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={addTask}>
        Add
      </button>

      {/* list */}
      <ul>
        {list.map((t, i) => (
          <p key={i}>
            <span>{t}</span>
            <button onClick={() => deleteTask(i)}>Delete</button>
            <button
              onClick={() => {
                const next = prompt("Update task", t);
                if (next === null) return;
                const value = next.trim();
                if (!value) return;
                setList((prev) => prev.map((x, idx) => (idx === i ? value : x)));
              }}
            >
              Update
            </button>
          </p>
        ))}
      </ul>


    </div>
  );
}

export default App;