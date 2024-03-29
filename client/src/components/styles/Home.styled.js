import styled from "styled-components";

export const StyledHome = styled.main`
  border-left: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-right: 1px solid ${({ theme }) => theme.colors.borderColor};
  flex-basis: 61%;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-grow: 1;
  }
`;

export const HomeNavbar = styled.div`
  height: 53px;
  padding: 0 1rem;
  width: 100%;
  display: flex;
  /* justify-content: space-between; */
  justify-content: ${(props) =>
    props.tweetPage ? "flex-start" : "space-between"};
  ${(props) => props.tweetPage && "gap: 2rem"};
  align-items: center;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.colors.NavbarBgColor};
  color: ${({ theme }) => theme.colors.textColor};
  backdrop-filter: blur(15px);
`;

export const HomeNavbarText = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const HomeUserPhotoContainer = styled.div`
  width: 35px;
  height: 35px;
`;

export const HomeNavbarTextPhotoContainer = styled.div`
  display: flex;
  gap: 2rem;
  a {
    @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
      display: none;
    }
  }
`;

export const TweetsContainer = styled.div`
  display: grid;
  place-items: center;
  min-width: 100%;
  min-height: 10rem;
`;
