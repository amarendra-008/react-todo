import { useState } from "react";
import Card from "./components/Card";
import FilterButtons, { type FilterType } from "./components/FilterButtons";
import Greeting from "./components/Greeting";
import Search from "./components/Search";
import TodoInput from "./components/TodoInput";
import { DEFAULT_TODOS } from "./constants";
import "./styles.css";

const App = () => {
  const [todos, setTodos] = useState(DEFAULT_TODOS);
  const [viewedTodos, setViewedTodos] = useState(todos);
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  return (
    <div>
      <Greeting name={"Todo's"} />
      <div className="search-todo-input-container">
        <Search setTodos={setViewedTodos} globalTodos={todos} />
        <TodoInput setTodos={setTodos} setViewedTodos={setViewedTodos} />
      </div>
      <FilterButtons
        globalTodos={todos}
        setViewedTodos={setViewedTodos}
        setActiveFilter={setActiveFilter}
      />
      <div className="todos-container">
        {viewedTodos.map((todo) => (
          <Card
            key={todo.id}
            id={todo.id}
            title={todo.title}
            description={todo.description}
            isChecked={todo.isChecked}
            setTodos={setTodos}
            setViewedTodos={setViewedTodos}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
