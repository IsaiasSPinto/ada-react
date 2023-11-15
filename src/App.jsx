import Contador from "./components/Contador";
import Lista from "./components/Lista";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function buscarDados() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );

      return await response.json();
    }

    buscarDados().then((data) => setTodos(data));
  }, []);

  return (
    <div>
      <Contador></Contador>

      <Lista />
      <ol>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <li>{todo.title}</li>
              {todo.completed ? <span>Completo</span> : null}
            </div>
          );
        })}
      </ol>
    </div>
  );
}

export default App;
