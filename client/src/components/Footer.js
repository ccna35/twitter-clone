import React from "react";
import { Container } from "./styles/Container.styled";
import { StyledFooter } from "./styles/Footer.styled";

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <span>About</span>
        <span>Help Center</span>
        <span>Terms of Service</span>
        <span>Privacy Policy</span>
        <span>Cookie Policy</span>
        <span>Accessibility</span>
        <span>Ads info</span>
        <span>Blog</span>
        <span>Status</span>
        <span>Careers</span>
        <span>Brand Resources</span>
        <span>Advertising</span>
        <span>Marketing</span>
        <span>Twitter for Business</span>
        <span>Developers</span>
        <span>Directory</span>
        <span>Settings</span>
        <span>© 2022 Twitter, Inc.</span>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
