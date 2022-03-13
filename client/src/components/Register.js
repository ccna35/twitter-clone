import React, { useState, useEffect } from "react";
import { AuthButton } from "./styles/Button.styled";
import {
  CloseIconContainer,
  DateOfBirthContainer,
  DateOfBirthSelect,
  Heading,
  ModalForm,
  ModalInput,
  RegisterModal,
  RegisterModalContainer,
} from "./styles/Register.styled";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../features/auth/authSlice";

function Register({ closeRegisterModal }) {
  const daysArray = [];

  for (let i = 1; i <= 30; i++) {
    daysArray.push(i);
  }

  const yearsArray = [];

  for (let i = 1902; i <= 2022; i++) {
    yearsArray.push(i);
  }

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    password2: "",
    month: "",
    day: null,
    year: null,
  });

  const { name, username, email, month, day, year, password, password2 } =
    formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      console.log("isErrror: ", isError);
    }

    if (isSuccess || user) {
      navigate("/home");
    }

    dispatch(reset());
  }, [user, isSuccess, isError, message, dispatch, navigate]);

  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(formData);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password === password2) {
      const userData = {
        name,
        username,
        email,
        password,
        birthDate: { month, day, year },
      };
      dispatch(register(userData));
      document.body.style.overflow = "unset";
    }
  };

  return (
    <RegisterModalContainer>
      <RegisterModal>
        <CloseIconContainer onClick={closeRegisterModal}>
          <IoMdClose size="1.5rem" />
        </CloseIconContainer>
        <Heading>Create your account</Heading>
        <ModalForm onSubmit={onSubmit}>
          <ModalInput
            type="text"
            required
            placeholder="Name"
            name="name"
            onChange={(e) => onChange(e)}
          />
          <ModalInput
            type="text"
            required
            placeholder="Username"
            name="username"
            onChange={(e) => onChange(e)}
          />
          <ModalInput
            type="email"
            required
            placeholder="Email"
            name="email"
            onChange={(e) => onChange(e)}
          />
          <ModalInput
            type="password"
            required
            placeholder="Password"
            name="password"
            onChange={(e) => onChange(e)}
          />
          <ModalInput
            type="password"
            required
            placeholder="Confirm password"
            name="password2"
            onChange={(e) => onChange(e)}
          />
          <label>Date of birth:</label>
          <DateOfBirthContainer>
            <DateOfBirthSelect
              placeholder="Month"
              required
              name="month"
              onChange={(e) => onChange(e)}
              defaultValue="January"
            >
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </DateOfBirthSelect>
            <DateOfBirthSelect
              required
              name="day"
              onChange={(e) => onChange(e)}
              defaultValue="1"
            >
              {daysArray.map((day) => (
                <option value={day} key={day}>
                  {day}
                </option>
              ))}
            </DateOfBirthSelect>
            <DateOfBirthSelect
              required
              name="year"
              onChange={(e) => onChange(e)}
              defaultValue="2022"
            >
              {yearsArray.reverse().map((year) => (
                <option value={year} key={year}>
                  {year}
                </option>
              ))}
            </DateOfBirthSelect>
          </DateOfBirthContainer>
          <AuthButton>{isLoading ? "Loading..." : "Sign Up"}</AuthButton>
        </ModalForm>
      </RegisterModal>
    </RegisterModalContainer>
  );
}

export default Register;
