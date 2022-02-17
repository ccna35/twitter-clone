import styled from "styled-components";

export const MainStyle = styled.div`
  display: flex;
  gap: 2rem;
  ${window.location.pathname !== "/" && "max-width"} : ${({ theme }) =>
    theme.breakpoints.lg};
  margin: 0 auto;
  /* padding: 0 1rem; */
  ${window.location.pathname !== "/" && "padding: 0 1rem;"}
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 0;
  }
`;
