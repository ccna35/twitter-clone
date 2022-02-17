import styled from "styled-components";

export const MenuItem = styled.div`
  width: fit-content;
  border-radius: 10rem;
  padding: 0.5rem 1rem;
  align-items: center;
  ${(props) => props.tweetbtn && "justify-content: center;"}
  ${(props) => (props.tweetbtn ? "display: flex;" : "display: grid;")}
  ${(props) => props.tweetbtn || "grid-template-columns: 2rem 1fr;"}
  transition: background-color 0.5s;
  &:hover {
    background-color: rgba(236, 240, 241, 1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    place-items: center;
  }
`;

export const MenuItemText = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const TweetBtn = styled(MenuItem)`
  width: 100%;
  color: white;
  background-color: ${({ theme }) => theme.colors.mainColor};
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverBlue};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: grid;
    place-items: center;
  }
  svg {
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      display: none;
    }
  }
`;
