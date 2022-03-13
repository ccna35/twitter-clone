import styled from "styled-components";

export const Container = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.lg};
  padding: 0 1rem;
  margin: 0 auto;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-left: 1rem;
    padding-right: 0;
  }
`;
