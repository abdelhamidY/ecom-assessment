import { useState } from "react";
import {
  Button,
  CheckboxLabel,
  Container,
  ErrorText,
  FormTitle,
  Input,
  InputField,
  Label,
  SuccessMessage,
} from "./Form.style";

const validateFullName = (fullName: string) => {
  if (!fullName.trim()) {
    return "Full Name is required.";
  }
  return "";
};

const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.trim()) {
    return "Email is required.";
  }
  if (!emailRegex.test(email)) {
    return "Please enter a valid email address.";
  }
  return "";
};

const validatePassword = (password: string) => {
  if (!password.trim()) {
    return "Password is required.";
  }
  if (password.length < 6) {
    return "Password must be at least 6 characters long.";
  }
  return "";
};

const validateConfirmPassword = ({
  password,
  confirmPassword,
}: {
  password: string;
  confirmPassword: string;
}) => {
  if (!confirmPassword.trim()) {
    return "Password confirmation is required.";
  }
  if (password !== confirmPassword) {
    return "Passwords do not match.";
  }
  return "";
};

const validateTerms = (termsAgreed: boolean) => {
  if (!termsAgreed) {
    return "You must agree to the terms and conditions.";
  }
  return "";
};

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAgreed: false,
  });

  const [formErrors, setFormErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAgreed: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const errors = {
      fullName: validateFullName(formData.fullName),
      email: validateEmail(formData.email),
      password: validatePassword(formData.password),
      confirmPassword: validateConfirmPassword({
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      }),
      termsAgreed: validateTerms(formData.termsAgreed),
    };

    setFormErrors(errors);

    return !Object.values(errors).some((error) => error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage("");

    if (validateForm()) {
      setSuccessMessage("Registration successful!");
      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        termsAgreed: false,
      });
    }
  };

  return (
    <Container>
      <FormTitle>Registration Form</FormTitle>
      <form onSubmit={handleSubmit}>
        <InputField>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            isError={!!formErrors.fullName}
          />
          {formErrors.fullName && <ErrorText>{formErrors.fullName}</ErrorText>}
        </InputField>

        <InputField>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            isError={!!formErrors.email}
          />
          {formErrors.email && <ErrorText>{formErrors.email}</ErrorText>}
        </InputField>

        <InputField>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            isError={!!formErrors.password}
          />
          {formErrors.password && <ErrorText>{formErrors.password}</ErrorText>}
        </InputField>

        <InputField>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            isError={!!formErrors.confirmPassword}
          />
          {formErrors.confirmPassword && (
            <ErrorText>{formErrors.confirmPassword}</ErrorText>
          )}
        </InputField>

        <InputField>
          <input
            type="checkbox"
            id="termsAgreed"
            name="termsAgreed"
            checked={formData.termsAgreed}
            onChange={handleInputChange}
          />
          <CheckboxLabel htmlFor="termsAgreed">
            I agree to the terms and conditions
          </CheckboxLabel>
          {formErrors.termsAgreed && (
            <ErrorText>{formErrors.termsAgreed}</ErrorText>
          )}
        </InputField>

        <Button type="submit">Register</Button>

        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      </form>
    </Container>
  );
};

export default RegistrationForm;
