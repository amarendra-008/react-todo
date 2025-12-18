import type { DEFAULT_TODOS } from "../constants";

type FilterType = "all" | "active" | "completed";

interface FilterButtonsProps {
  globalTodos: typeof DEFAULT_TODOS;
  setViewedTodos: React.Dispatch<React.SetStateAction<typeof DEFAULT_TODOS>>;
  setActiveFilter: React.Dispatch<React.SetStateAction<FilterType>>;
}

function FilterButtons({
  globalTodos,
  setViewedTodos,
  setActiveFilter,
}: FilterButtonsProps) {
  function handleFilterClick(filter: FilterType) {
    setActiveFilter(filter);
    if (filter === "all") {
      setViewedTodos(globalTodos);
    } else if (filter === "active") {
      setViewedTodos(globalTodos.filter((todo) => !todo.isChecked));
    } else if (filter === "completed") {
      setViewedTodos(globalTodos.filter((todo) => todo.isChecked));
    }
  }

  return (
    <div className="filter-buttons-container">
      <button className="filter-btn" onClick={() => handleFilterClick("all")}>
        All
      </button>
      <button className="filter-btn" onClick={() => handleFilterClick("active")}>
        Active
      </button>
      <button className="filter-btn" onClick={() => handleFilterClick("completed")}>
        Completed
      </button>
    </div>
  );
}

export default FilterButtons;
export type { FilterType };