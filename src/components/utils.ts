import { DEFAULT_TODOS } from "../constants";

type Todos = typeof DEFAULT_TODOS;

export function filterTodosByStartsWith(
  input: string,
  viewedTodos: Todos,
  globalTodos: Todos
) {
  if (input === "") {
    return globalTodos;
  }
  const result = [];

  for (let i = 0; i < viewedTodos.length; i++) {
    if (viewedTodos[i].title.toLowerCase().startsWith(input.toLowerCase())) {
      result.push(viewedTodos[i]);
    }
  }
  return result;
}

export function deleteTodoById(id: number, prevTodos: Todos) {
  const newTodos = [];
  for (let i = 0; i < prevTodos.length; i++) {
    if (prevTodos[i].id !== id) {
      newTodos.push(prevTodos[i]);
    }
  }
  return newTodos;
}
