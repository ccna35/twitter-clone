import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { useState } from "react";
import Home from "./pages/Home";
import User from "./pages/User";
import AppLayout from "./components/AppLayout";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8080/");

socket.on("text", (data) => {
  console.log(data);
});

function App() {
  const [dark, setDark] = useState(true);

  const theme = {
    colors: {
      mainColor: "#1d9bf0",
      BgColor: dark ? "#000" : "white",
      RightPanelBgColor: dark ? "#15181c" : "#f7f9f9",
      secColor: "#536471",
      hoverBlue: "#138bdb",
      hoverLightBlue: "#1fc0df24",
      hoverLightGrey: dark ? "#1c1f23" : "#eff3f4",
      hoverTweetBg: dark ? "#080808" : "#eff3f4",
      bgColor: "#f7f9f9",
      FollowTextColor: dark ? "black" : "white",
      FollowBgColor: dark ? "white" : "#0f1419",
      FollowBgHoverColor: dark ? "lightgrey" : "#4a4a49",
      EditProfileBgColor: dark ? "black" : "white",
      EditProfileTextColor: dark ? "white" : "black",
      borderColor: dark ? "#2f3336" : "#eff3f4",
      borderGreyColor: "#d2dbe0",
      LeftMenuBgHoverColor: dark ? "#131414" : "rgba(236, 240, 241, 1)",
      textColor: dark ? "#d9d9d9" : "#0f1419",
      InputBgColor: dark ? "#000" : "white",
      InputCursorColor: dark ? "#d9d9d9" : "#0f1419",
      userPhotoBorder: dark ? "black" : "white",
      MobileBarIcons: dark ? "#d9d9d9" : "#0f1419",
      VerifiedBadge: dark ? "#d9d9d9" : "#1d9bf0",
      NavbarBgColor: "#00000000",
    },
    breakpoints: {
      xxs: "500px",
      xs: "600px",
      mobile: "768px",
      tablet: "968px",
      lg: "1250px",
      xl: "1400px",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route element={<AppLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/user" element={<User />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
