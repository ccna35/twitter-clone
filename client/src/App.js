import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { useState } from "react";
import Home from "./pages/Home";
import User from "./pages/User";
import AppLayout from "./components/AppLayout";
import { useSelector } from "react-redux";

function App() {
  const { theme } = useSelector((state) => state.user);

  const mainTheme = {
    colors: {
      mainColor: "#1d9bf0",
      BgColor:
        theme === "dark" ? "#000" : theme === "dim" ? "#15202b" : "white",
      RightPanelBgColor:
        theme === "dark" ? "#15181c" : theme === "dim" ? "#1e2732" : "#f7f9f9",
      secColor: theme === "light" ? "#536471" : "#8b98a5",
      hoverBlue: "#138bdb",
      hoverLightBlue: "#1fc0df24",
      hoverLightGrey:
        theme === "dark" ? "#1c1f23" : theme === "dim" ? "#273340" : "#eff3f4",
      hoverTweetBg: theme === "dark" ? "#080808" : "#eff3f4",
      bgColor: "#f7f9f9",
      FollowTextColor: theme === "dim" ? "white" : "black",
      // FollowBgColor: theme === "dark" ? "white" : "#0f1419",
      FollowBgColor:
        theme === "dark" ? "white" : theme === "dim" ? "#0f1419" : "white",
      FollowBgHoverColor: theme === "dark" ? "lightgrey" : "#4a4a49",
      EditProfileBgColor:
        theme === "dark" ? "black" : theme === "dim" ? "#15202b" : "white",
      EditProfileTextColor: theme === "dark" ? "white" : "black",
      borderColor:
        theme === "dark" ? "#2f3336" : theme === "dim" ? "#273340" : "#eff3f4",
      borderGreyColor: "#d2dbe0",
      LeftMenuBgHoverColor:
        theme === "dark"
          ? "#131414"
          : theme === "dim"
          ? "#273340"
          : "rgba(236, 240, 241, 1)",
      textColor: theme === "dark" || theme === "dim" ? "#f7f9f9" : "#0f1419",
      InputBgColor:
        theme === "dark" ? "#000" : theme === "dim" ? "#15202b" : "white",
      InputCursorColor: theme === "light" ? "#0f1419" : "#d9d9d9",
      userPhotoBorder:
        theme === "dark" ? "black" : theme === "dim" ? "#15202b" : "white",
      BtnTextColor: theme === "light" ? "black" : "#eff3f4",
      MobileBarIcons: theme === "dark" ? "#d9d9d9" : "#0f1419",
      VerifiedBadge: theme === "dark" ? "#d9d9d9" : "#1d9bf0",
      BoxShadowColor: theme === "light" ? "#c6cbcd" : "#273340",
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
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route element={<AppLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/:username" element={<User />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
