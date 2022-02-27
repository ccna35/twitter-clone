import styled from "styled-components";

export const ShowNewTweetsContainer = styled.div`
  padding: 1rem;
  color: ${({ theme }) => theme.colors.mainColor};
  text-align: center;
  transition: background-color 0.5s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverTweetBg};
  }
`;
