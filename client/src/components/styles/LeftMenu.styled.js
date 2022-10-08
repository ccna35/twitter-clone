import styled from "styled-components";

export const MenuItem = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textColor};
  width: fit-content;
  border-radius: 10rem;
  padding: 0.5rem 0.75rem;
  align-items: center;
  ${(props) => props.tweetbtn && "justify-content: center;"}
  ${(props) => (props.tweetbtn ? "display: flex;" : "display: grid;")}
  ${(props) => props.tweetbtn || "grid-template-columns: 2rem 1fr;"}
  transition: background-color 0.5s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.LeftMenuBgHoverColor};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    place-items: center;
    width: 3rem;
    height: 3rem;
    padding: 0;
    grid-template-columns: 1fr;
    ${(props) => props.hide && "display: none;"}
  }
`;

export const MenuItemText = styled.p`
  font-size: 1.5rem;
  font-weight: ${(props) => (props.active ? "600" : "300")};
  margin-left: 1rem;
  transition: font-weight 0.25s;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const TweetBtn = styled(MenuItem)`
  width: 100%;
  color: white;
  background-color: ${({ theme }) => theme.colors.mainColor};
  cursor: pointer;
  transition: background-color 0.5s;
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
