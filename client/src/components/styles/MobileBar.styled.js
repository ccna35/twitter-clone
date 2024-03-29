import styled from "styled-components";

export const MobileBarStyle = styled.div`
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.xxs}) {
    display: none;
  }
`;

export const MobileBarContainer = styled.div`
  height: 52.5px;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
  background-color: ${({ theme }) => theme.colors.BgColor};
  color: ${({ theme }) => theme.colors.MobileBarIcons};
`;

export const MobileTweetBtn = styled.div`
  display: grid;
  place-items: center;
  color: white;
  background-color: ${({ theme }) => theme.colors.mainColor};
  width: 3rem;
  height: 3rem;
  border-radius: 10rem;
  position: absolute;
  right: 15.5px;
  bottom: 68px;
`;
