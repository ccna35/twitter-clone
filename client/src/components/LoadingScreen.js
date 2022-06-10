import React from "react";
import { LoadingScreenStyle } from "./styles/LoadingScreen.styled";
import { FaTwitter } from "react-icons/fa";

function LoadingScreen() {
  return (
    <LoadingScreenStyle>
      <FaTwitter size="1.75rem" />
    </LoadingScreenStyle>
  );
}

export default LoadingScreen;
