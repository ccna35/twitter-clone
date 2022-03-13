import styled from "styled-components";

export const MainStyle = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.breakpoints.lg};
  padding: 0 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-left: 1rem;
    padding-right: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 0;
    gap: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: 2rem;
  }
`;
