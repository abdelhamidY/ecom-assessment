import { useState } from "react";

import useTodos from "../../hooks/useTodo";
import { ITodo } from "./todoList.types";
import {
  Button,
  Container,
  DeleteButton,
  ErrorText,
  FilterContainer,
  FilterDropdown,
  Form,
  Header,
  Input,
  TodoItem,
  TodoList,
  TodoText,
} from "./todoList.style";

const TodoApp = () => {
  const { todos, addTodo, toggleComplete, deleteTodo } = useTodos();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [filter, setFilter] = useState("all");

  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const handleAddTodo = () => {
    let hasError = false;

    if (!title.trim()) {
      setTitleError(true);
      hasError = true;
    } else {
      setTitleError(false);
    }

    if (!description.trim()) {
      setDescriptionError(true);
      hasError = true;
    } else {
      setDescriptionError(false);
    }

    if (!hasError) {
      addTodo({ title, description });
      setTitle("");
      setDescription("");
    }
  };

  const filteredTodos = todos.filter((todo: ITodo) => {
    if (filter === "completed") {
      return todo.completed;
    } else if (filter === "incomplete") {
      return !todo.completed;
    }
    return true;
  });

  return (
    <Container>
      <Header>Todo List</Header>

      <Form>
        <Input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          isError={titleError}
          data-test-id="title-input"
        />
        {titleError && <ErrorText>Title is required</ErrorText>}
        <Input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          isError={descriptionError}
          data-test-id="description-input"
        />
        {descriptionError && <ErrorText>Description is required</ErrorText>}
        <Button data-test-id="add-button" onClick={handleAddTodo}>
          Add Todo
        </Button>
      </Form>

      <FilterContainer>
        <FilterDropdown
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </FilterDropdown>
      </FilterContainer>

      <TodoList>
        {filteredTodos.map((todo: ITodo, index: number) => (
          <TodoItem key={index} completed={todo.completed}>
            <TodoText completed={todo.completed}>
              {todo.title}: {todo.description}
            </TodoText>
            <div>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(index)}
              />
              <DeleteButton onClick={() => deleteTodo(index)}>
                Delete
              </DeleteButton>
            </div>
          </TodoItem>
        ))}
      </TodoList>
    </Container>
  );
};

export default TodoApp;
