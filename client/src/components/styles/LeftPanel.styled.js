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
    flex-direction: column;
  }
`;

export const LeftPanelContainer = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 4rem;
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

export const LogoMenuContainer = styled.div`
  gap: 0.25rem;
  display: flex;
  flex-direction: column;
`;

export const LeftPanelUserContainer = styled.div`
  padding: 1rem;
  border-radius: 10rem;
  display: grid;
  grid-template-columns: 3rem 7rem 1rem;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.5s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverLightGrey};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: unset;
  }

  svg {
    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      display: none;
    }
  }
`;

export const LeftPanelUserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const LeftPanelUserName = styled.p`
  font-weight: 700;
`;

export const LeftPanelUserHandle = styled.p`
  color: ${({ theme }) => theme.colors.secColor};
`;
