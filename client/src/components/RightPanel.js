import React from "react";
import Search from "./RightPanelComponents/Search";
import WhatsHappening from "./RightPanelComponents/WhatsHappening";
import WhoToFollow from "./RightPanelComponents/WhoToFollow";
import { RightPanelStyle } from "./styles/RightPanel.styled";

function RightPanel() {
  return (
    <RightPanelStyle>
      <Search />
      <WhatsHappening />
      <WhoToFollow />
    </RightPanelStyle>
  );
}

export default RightPanel;
