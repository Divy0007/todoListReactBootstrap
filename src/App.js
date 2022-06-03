import react, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [button, setButton] = useState(true);
  const [id, setId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      alert("enter data");
    } else if (id && !button) {
      setTodo(
        todo.map((value) => {
          if (value.id === id) {
            return { ...value, value: input };
          }
          return value;
        })
      );
      setButton(true);
    } else {
      const newEntery = {
        id: new Date().getTime().toString(),
        value: input,
      };
      setTodo((values) => [...values, newEntery]);
    }

    setInput("");
  };

  const handleUpdate = (v, id) => {
    setInput(v);
    setId(id);
    setButton(false);
  };

  const handleDelete = (i) => {
    setTodo(todo.filter((value) => value.id !== i));
  };
  return (
    <div className="container w-25">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Todo
          </label>
          <input
            type="todo"
            className="form-control "
            id="todo"
            aria-describedby="emailHelp"
            name="todo"
            value={input || ""}
            onChange={(e) => setInput(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            add your todo lists..
          </div>
        </div>
        {button ? (
          <button type="submit" className="btn btn-primary form-control">
            Add
          </button>
        ) : (
          <button type="submit" className="btn btn-primary form-control">
            update
          </button>
        )}
      </form>

      <table className="table mt-5">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Todo work</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {todo.map((value) => {
            return (
              <tr key={value.id}>
                <th scope="row">{value.id}</th>
                <td>{value.value}</td>
                <td>
                  {" "}
                  <button
                    onClick={() => handleUpdate(value.value, value.id)}
                    className="btn btn-success"
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(value.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
