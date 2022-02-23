import React from "react";
import { RightPanelLinksContainer } from "../styles/RightPanelStyles/RightPanelLinks.styled";

function RightPanelLinks() {
  return (
    <RightPanelLinksContainer>
      <a href="/">Terms of Service</a>
      <a href="/">Privacy Policy</a>
      <a href="/">Cookie Policy</a>
      <a href="/">Accessibility</a>
      <a href="/">Ads</a>
      <a href="/">info</a>
      <a href="/">More...</a>
      <p>© 2022 Twitter, Inc.</p>
    </RightPanelLinksContainer>
  );
}

export default RightPanelLinks;
