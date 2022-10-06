import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import ChatBox from "./ChatBox";
import LeftPanel from "./LeftPanel";
import MobileBar from "./MobileBar";
import RightPanel from "./RightPanel";
import { MainStyle } from "./styles/MainStyle.styled";

function AppLayout() {
  return (
    <>
      <MainStyle>
        <LeftPanel />
        <Outlet />
        <RightPanel />
      </MainStyle>
      <MobileBar />
      <ChatBox />
    </>
  );
}

export default AppLayout;
