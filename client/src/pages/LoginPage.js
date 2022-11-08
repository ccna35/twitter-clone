import React, { useEffect, useState } from "react";
import {
  BtnGroup,
  Flex,
  LeftSide,
  RightSide,
} from "../components/styles/Flex.styled";
import { LoginPageStyles } from "../components/styles/LoginPage.styled";
import { Button } from "../components/styles/Button.styled";
import Footer from "../components/Footer";
import Register from "../components/Register";
import LoginModal from "../components/LoginModal";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reset } from "../features/auth/authSlice";

function LoginPage() {
  // Handle register modal
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const openRegisterModal = () => {
    setRegisterModalOpen((prev) => !prev);
    document.body.style.overflow = "hidden";
  };

  const closeRegisterModal = () => {
    setRegisterModalOpen((prev) => !prev);
    document.body.style.overflow = "unset";
  };

  // Handle register modal
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const openLoginModal = () => {
    setLoginModalOpen((prev) => !prev);
    document.body.style.overflow = "hidden";
  };

  const closeLoginModal = () => {
    setLoginModalOpen((prev) => !prev);
    document.body.style.overflow = "unset";
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userExists, isError, isSuccess, message, user } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    // if (user) {
    //   console.log("User exists user");
    //   navigate("/home");
    // }

    if (isError) {
      console.log("isErrror: ", isError);
    }

    if (isSuccess || userExists) {
      navigate("/home");
    }

    dispatch(reset());
  }, [userExists, isSuccess, isError, message, dispatch, navigate]);

  return (
    <>
      {registerModalOpen && (
        <Register closeRegisterModal={closeRegisterModal} />
      )}
      {loginModalOpen && <LoginModal closeLoginModal={closeLoginModal} />}
      <LoginPageStyles>
        <Flex>
          <LeftSide>
            <img src="./images/bird.svg" alt="" />
          </LeftSide>
          <RightSide>
            <img src="./images/twitter-logo.svg" alt="" />
            <h1>Happening now</h1>
            <h2>Join Twitter today.</h2>
            <BtnGroup>
              <Button>
                <img src="./images/google-svgrepo-com.svg" alt="" /> Sign up
                with Google
              </Button>
              <Button>
                <img src="./images/apple-logo-svgrepo-com.svg" alt="" /> Sign up
                with Apple
              </Button>
              <div>
                <span>or</span>
              </div>
              <Button onClick={openRegisterModal}>
                Sign up with phone or email
              </Button>
              <small>
                By signing up, you agree to the Terms of Service and Privacy
                Policy, including Cookie Use.
              </small>
              <p>Already have an account?</p>
              <Button onClick={openLoginModal}>Sign in</Button>
            </BtnGroup>
          </RightSide>
        </Flex>
        <Footer />
      </LoginPageStyles>
    </>
  );
}

export default LoginPage;
