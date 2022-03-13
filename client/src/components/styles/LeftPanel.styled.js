import styled from "styled-components";

export const LeftPanelStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  a {
    color: black;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xxs}) {
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
    gap: 4rem;
  }
`;

export const LogoContainer = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.colors.VerifiedBadge};
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
  padding: 0.75rem;
  border-radius: 10rem;
  display: grid;
  grid-template-columns: 3rem 7rem 1rem;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  position: relative;
  transition: background-color 0.5s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverLightGrey};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: unset;
    gap: 0;
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
  color: ${({ theme }) => theme.colors.textColor};
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

export const LeftPanelUserIconContainer = styled.div`
  color: ${({ theme }) => theme.colors.secColor};
`;

export const LeftPanelUserPopUp = styled.div`
  border-radius: 1rem;
  box-shadow: 0px 0px 8px 0px #c7c7c7;
  position: absolute;
  left: 0;
  top: -301%;
  width: 19rem;
  height: 12rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.BgColor};
  svg {
    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      display: block;
    }
  }
`;

export const UserPopUpNameUsername = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-grow: 1;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const UserPopUpInfo = styled.div`
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.hoverLightGrey};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.BgColor};
`;

export const UserPopUpBottom = styled.div`
  background-color: ${({ theme }) => theme.colors.BgColor};
  display: flex;
  flex-direction: column;
`;

export const UserPopUpBottomText = styled.p`
  padding: 1rem;
  color: ${({ theme }) => theme.colors.textColor};
  transition: background-color 0.5s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverLightGrey};
  }
`;

export const UserPopUpIconContainer = styled.div`
  color: ${({ theme }) => theme.colors.mainColor};
`;

export const UserPopUpHandle = styled.span`
  color: ${({ theme }) => theme.colors.secColor};
  display: inline;
  margin-left: 0.5rem;
`;

export const LeftPanelAllContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;
