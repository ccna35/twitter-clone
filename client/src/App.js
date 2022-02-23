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

function App() {
  const theme = {
    colors: {
      mainColor: "#1d9bf0",
      secColor: "#536471",
      hoverBlue: "#138bdb",
      hoverLightBlue: "rgba(197, 239, 247, 0.5)",
      hoverLightGrey: "#eff3f4",
      bgColor: "#f7f9f9",
      FollowBgColor: "#0f1419",
      EditProfileBgColor: "white",
      FollowBgHoverColor: "#4a4a49",
      borderColor: "#eff3f4",
      borderGreyColor: "#d2dbe0",
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
      <MobileBar />
    </ThemeProvider>
  );
}

export default App;
