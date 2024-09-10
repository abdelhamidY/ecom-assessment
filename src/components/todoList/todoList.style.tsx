import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Arial", sans-serif;
`;

export const Header = styled.h1`
  text-align: center;
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Input = styled.input<{ isError: boolean }>`
  padding: 10px;
  border: 1px solid ${({ isError }) => (isError ? "red" : "#ccc")};
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    border-color: ${({ isError }) => (isError ? "red" : "#007bff")};
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #218838;
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 12px;
`;

export const TodoList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const TodoItem = styled.li<{ completed: boolean }>`
  background-color: ${({ completed }) => (completed ? "#d4edda" : "#f8d7da")};
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const TodoText = styled.span<{ completed: boolean }>`
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  font-size: 18px;
  color: #333;
`;

export const FilterContainer = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

export const FilterDropdown = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  color: #333;
  cursor: pointer;
  appearance: none;

  &:hover {
    border-color: #007bff;
  }

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const DeleteButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;
