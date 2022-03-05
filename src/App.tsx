import { useCallback, useReducer, useRef } from "react";
import "./App.css";
interface Todo {
  id: number;
  text: string;
}
type actionType =
  | { type: "ADD"; text: string }
  | { type: "DELETE"; id: number };

function App() {
  function reducer(state: Todo[], action: actionType) {
    switch (action.type) {
      case "ADD":
        return [
          ...state,
          {
            id: state.length,
            text: action.text,
          },
        ];
      case "DELETE":
        return state.filter(({ id }) => id !== action.id);
    }
  }
  const [todos, dispatch] = useReducer(reducer, []);

  const newTodoRef = useRef<HTMLInputElement>(null);

  const onAddTodo = useCallback(() => {
    if (newTodoRef.current) {
      dispatch({ type: "ADD", text: newTodoRef.current.value });
      newTodoRef.current.value = "";
    }
  }, []);

  return (
    <div className="App">
      <input type="text" ref={newTodoRef} placeholder="Add Person" />
      <button onClick={onAddTodo}>Add</button>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.text}
          <button onClick={() => dispatch({ type: "DELETE", id: todo.id })}>
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
