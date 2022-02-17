import React from "react";
import Search from "./RightPanelComponents/Search";
import WhatsHappening from "./RightPanelComponents/WhatsHappening";
import { RightPanelStyle } from "./styles/RightPanel.styled";

function RightPanel() {
  return (
    <RightPanelStyle>
      <Search />
      <WhatsHappening />
    </RightPanelStyle>
  );
}

export default RightPanel;
