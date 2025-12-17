import type { DEFAULT_TODOS } from "../constants";
import "./card.css";

interface TodoInputProps {
  setTodos: React.Dispatch<React.SetStateAction<typeof DEFAULT_TODOS>>;
  setViewedTodos: React.Dispatch<React.SetStateAction<typeof DEFAULT_TODOS>>;
}

function TodoInput({ setTodos, setViewedTodos }: TodoInputProps) {
  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const newTodo = {
      title,
      description,
      isChecked: false,
    };
    setTodos((prevAllTodos) => [
      ...prevAllTodos,
      { ...newTodo, id: prevAllTodos.length + 1 },
    ]);
    setViewedTodos((prevAllTodos) => [
      ...prevAllTodos,
      { ...newTodo, id: prevAllTodos.length + 1 },
    ]);
  }
  return (
    <div>
      <form className="todo-form" onSubmit={onSubmit}>
        <input name="title" placeholder="Add Title" />{" "}
        <input name="description" placeholder="Add Description" />{" "}
        <input type="submit" placeholder="Add Todo" />
      </form>
    </div>
  );
}

export default TodoInput;
