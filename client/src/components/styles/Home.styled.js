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
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: rgba(256, 256, 256, 0.8);
  backdrop-filter: blur(15px);
`;

export const HomeNavbarText = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const HomeUserPhotoContainer = styled.div`
  width: 35px;
  height: 35px;
  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    display: none;
  }
`;

export const HomeNavbarTextPhotoContainer = styled.div`
  display: flex;
  gap: 2rem;
`;
