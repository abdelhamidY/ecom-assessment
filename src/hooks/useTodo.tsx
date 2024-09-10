import { useEffect, useState } from "react";
import { ITodo } from "../components/todoList/todoList.types";

const useTodos = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = ({
    title,
    description,
  }: Pick<ITodo, "title" | "description">) => {
    setTodos([...todos, { title, description, completed: false }]);
  };

  const toggleComplete = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index: number) => {
    const updatedTodos = todos.filter((_: ITodo, i: number) => i !== index);
    setTodos(updatedTodos);
  };

  return { todos, addTodo, toggleComplete, deleteTodo };
};

export default useTodos;
