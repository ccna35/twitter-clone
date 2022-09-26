import styled from "styled-components";

export const TweetPageContainer = styled.main`
  border-left: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-right: 1px solid ${({ theme }) => theme.colors.borderColor};
  flex-basis: 61%;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-grow: 1;
  }
`;

export const TweetContainer = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
`;
