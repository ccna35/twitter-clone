import React from "react";
import RightPanelLinks from "./RightPanelComponents/RightPanelLinks";
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
      <RightPanelLinks />
    </RightPanelStyle>
  );
}

export default RightPanel;
