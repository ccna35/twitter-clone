import React, { useState } from "react";
import { AuthButton } from "./styles/Button.styled";
import {
  CloseIconContainer,
  Heading,
  ModalForm,
  ModalInput,
  RegisterModal,
  RegisterModalContainer,
} from "./styles/Register.styled";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";

function LoginModal({ closeLoginModal }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.auth);

  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    console.log(userData);
    dispatch(login(userData));
    document.body.style.overflow = "unset";
  };
  return (
    <RegisterModalContainer>
      <RegisterModal>
        <CloseIconContainer onClick={closeLoginModal}>
          <IoMdClose size="1.5rem" />
        </CloseIconContainer>
        <Heading>Sign in to Twitter</Heading>
        <ModalForm onSubmit={onSubmit}>
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
          <AuthButton>{isLoading ? "Loading..." : "Log in"}</AuthButton>
        </ModalForm>
      </RegisterModal>
    </RegisterModalContainer>
  );
}

export default LoginModal;
