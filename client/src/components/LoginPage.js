import React from "react";
import { BtnGroup, Flex, LeftSide, RightSide } from "./styles/Flex.styled";
import { LoginPageStyles } from "./styles/LoginPage.styled";
import { Button } from "./styles/Button.styled";
import Footer from "./Footer";

function LoginPage() {
  return (
    <LoginPageStyles>
      <Flex>
        <LeftSide>
          <img src="./images/bird.svg" alt="" />
        </LeftSide>
        <RightSide>
          <img src="./images/twitter logo.svg" alt="" />
          <h1>Happening now</h1>
          <h2>Join Twitter today.</h2>
          <BtnGroup>
            <Button>
              <img src="./images/google-svgrepo-com.svg" alt="" /> Sign up with
              Google
            </Button>
            <Button>
              <img src="./images/apple-logo-svgrepo-com.svg" alt="" /> Sign up
              with Apple
            </Button>
            <div>
              <span>or</span>
            </div>
            <Button>Sign up with phone or email</Button>
            <small>
              By signing up, you agree to the Terms of Service and Privacy
              Policy, including Cookie Use.
            </small>
            <p>Already have an account?</p>
            <Button>Sign in</Button>
          </BtnGroup>
        </RightSide>
      </Flex>
      <Footer />
    </LoginPageStyles>
  );
}

export default LoginPage;
