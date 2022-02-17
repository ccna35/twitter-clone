import styled from "styled-components";

export const LeftPanelStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  a {
    color: black;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    display: none;
  }
`;

export const LeftPanelContainer = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    align-items: center;
  }
`;

export const Logo = styled.img`
  width: 30px;
`;
export const LogoContainer = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: grid;
  place-items: center;
  transition: background-color 0.5s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverLightBlue};
  }
`;
