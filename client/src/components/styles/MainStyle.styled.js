import styled from "styled-components";

export const MainStyle = styled.div`
  display: flex;
  gap: 1rem;
  ${window.location.pathname !== "/" && "max-width"} : ${({ theme }) =>
    theme.breakpoints.lg};
  margin: 0 auto;
  ${window.location.pathname !== "/" && "padding: 0 1rem;"}
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: 2rem;
  }
`;
