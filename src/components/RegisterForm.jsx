import { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 300px;
  padding: 40px 20px;
  border-radius: 10px;
  border: 1px solid purple;
  margin: auto;
`;

const InputHolder = styled.fieldset`
  position: relative;
  display: flex;
  flex-direction: column;
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;

  input {
    border: none;
    border-bottom: 1px solid gray;

    ::placeholder { opacity: 0; }
    
    &:not(:placeholder-shown) + label {
      top: -5px;
      left: 0;
    }

    &:focus {
      outline: none;
      border-color: purple;

      & + label {
        color: purple;
        top: -5px;
        left: 0;
      }
    }
  }

  label {
    position: absolute;
    font-size: .8em;
    top: 50%;
    left: 2px;
    transform: translateY(-80%);
    transition: all .3s ease 0s;
  }
`;
const SubmitButton = styled.button`
  background-color: purple;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  color: white;
  box-shadow: 1px 1px 5px 0px #000000;

  &:active {
    box-shadow: 0px 0px 0px 0px #000000;
  }
`;
const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData)
  }
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value.trim()
    });
  }

  return (
    <Form action="POST" onSubmit={handleSubmit}>
      <InputHolder>
        <input
          id="firstName"
          type="text"
          name="firstName"
          placeholder="Test"
          onChange={handleChange} />
        <label htmlFor="firstName">First name</label>
      </InputHolder>
      <InputHolder>
        <input
          id="lastName"
          type="text"
          name="lastName"
          placeholder="Test"
          onChange={handleChange} />
        <label htmlFor="lastName">Last name</label>
      </InputHolder>
      <InputHolder>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Test"
          onChange={handleChange} />
        <label htmlFor="email">Email</label>
      </InputHolder>
      <InputHolder>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Test"
          onChange={handleChange} />
        <label htmlFor="password">Password</label>
      </InputHolder>
      <InputHolder>
        <input
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          placeholder="Test"
          onChange={handleChange} />
        <label htmlFor="confirmPassword">Confirm password</label>
      </InputHolder>
      <SubmitButton>Register</SubmitButton>
    </Form>
  )
}

export default RegisterForm;