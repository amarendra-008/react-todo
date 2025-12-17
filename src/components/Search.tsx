import { type ChangeEvent } from "react";
import type { DEFAULT_TODOS } from "../constants";
import { filterTodosByStartsWith } from "./utils";

interface SearchProps {
  setTodos: React.Dispatch<React.SetStateAction<typeof DEFAULT_TODOS>>;
  globalTodos: typeof DEFAULT_TODOS;
}

function Search({ setTodos: setViewedTodos, globalTodos }: SearchProps) {
  function onInputUpdate(event: ChangeEvent<HTMLInputElement>) {
    setViewedTodos((prevViewedTodos) =>
      filterTodosByStartsWith(event.target.value, prevViewedTodos, globalTodos)
    );
  }
  return (
    <div>
      <input name="Search" placeholder="Search" onChange={onInputUpdate} />{" "}
    </div>
  );
}

export default Search;
