# React Todo App
> A minimal React Todo App with TypeScript, Vite, and ESLint

## Description
This project provides a basic Todo App built with React, TypeScript, and Vite. It includes ESLint configuration for code quality and type checking.

## Features
* React and React-DOM for building the user interface
* TypeScript for type safety and code maintainability
* Vite for fast development and hot module replacement
* ESLint for code linting and type checking
* Modular component structure with separate files for components, styles, and utilities

## Installation
To install the dependencies, run the following command:
```
npm install
```
## Usage
To start the development server, run:
```
npm run dev
```
This will start the Vite development server, and you can access the app at `http://localhost:3000`.

To build the app for production, run:
```
npm run build
```
To lint the code, run:
```
npm run lint
```
### Code Example
Here's an example of a Todo component:
```tsx
// src/components/TodoInput.tsx
import React, { useState } from 'react';

interface TodoInputProps {
  onAddTodo: (todo: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    onAddTodo(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoInput;
```
## Configuration
The project uses the following configuration files:

* `tsconfig.app.json` and `tsconfig.node.json` for TypeScript configuration
* `eslintrc.config.js` for ESLint configuration
* `vite.config.ts` for Vite configuration

## Contributing
Contributions are welcome! To contribute, fork the repository, make your changes, and submit a pull request.

## License
This project is licensed under the MIT License.