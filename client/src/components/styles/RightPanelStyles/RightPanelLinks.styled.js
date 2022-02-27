import styled from "styled-components";

export const RightPanelLinksContainer = styled.div`
  color: ${({ theme }) => theme.colors.secColor};
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  column-gap: 0.4rem;
  a {
    &:hover {
      text-decoration: underline;
    }
    &:visited {
      color: ${({ theme }) => theme.colors.secColor};
    }
  }
`;
