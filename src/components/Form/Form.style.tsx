import styled from "styled-components";

export const Container = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  padding-left: 0px;
  border-radius: 8px;
`;

export const FormTitle = styled.h2`
  text-align: center;
  color: #333;
`;
export const InputField = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: #333;
`;

export const Input = styled.input<{ isError: boolean }>`
  width: 100%;
  padding: 10px;
  border: 1px solid ${({ isError }) => (isError ? "red" : "#ccc")};
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    border-color: ${({ isError }) => (isError ? "red" : "#007bff")};
  }
`;

export const CheckboxLabel = styled.label`
  font-size: 14px;
  color: #333;
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #218838;
  }
`;
export const SuccessMessage = styled.p`
  color: green;
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
`;
