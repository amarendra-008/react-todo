import { useState, type ChangeEvent } from "react";
import { DEFAULT_TODOS } from "../constants";
import "./card.css";
import { deleteTodoById } from "./utils";

interface CardProps {
  id: number;
  title: string;
  description: string;
  isChecked: boolean;
  setTodos: React.Dispatch<React.SetStateAction<typeof DEFAULT_TODOS>>;
  setViewedTodos: React.Dispatch<React.SetStateAction<typeof DEFAULT_TODOS>>;
}

function Card({
  title,
  description,
  isChecked: initialIsChecked,
  setTodos,
  id,
  setViewedTodos,
}: CardProps) {
  const [isChecked, setIsChecked] = useState(initialIsChecked);

  function handleCheck(event: ChangeEvent<HTMLInputElement>) {
    setIsChecked(event.target.checked);
  }
  function handleDelete() {
    setTodos((prevTodos) => deleteTodoById(id, prevTodos));
    setViewedTodos((prevTodos) => deleteTodoById(id, prevTodos));
  }
  return (
    <div className={`card ${isChecked ? "card-checked" : "card-unchecked"}`}>
      <div className="card-header">
        <p>{title}</p>
        <div className="card-check">
          <label className="checkbox" htmlFor="human">
            Completed:
          </label>
          <input
            className="checkbox"
            type="checkbox"
            name="cb"
            checked={isChecked}
            onChange={(event) => handleCheck(event)}
          />
          <button onClick={() => handleDelete()}>Delete</button>
        </div>
      </div>
      {description}
    </div>
  );
}

export default Card;
