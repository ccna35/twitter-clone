import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Home from "./components/Home";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import { MainStyle } from "./components/styles/MainStyle.styled";
import User from "./components/User";
import MobileBar from "./components/MobileBar";
import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);

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
      NavbarBgColor: "#00000000",
    },
    breakpoints: {
      xs: "500px",
      mobile: "768px",
      tablet: "968px",
      lg: "1250px",
      xl: "1400px",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainStyle>
        <Router>
          {window.location.pathname !== "/" && <LeftPanel />}
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </Router>
        {window.location.pathname !== "/" && <RightPanel />}
      </MainStyle>
      {window.location.pathname !== "/" && <MobileBar />}
    </ThemeProvider>
  );
}

export default App;
