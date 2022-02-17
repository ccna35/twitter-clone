import styled from "styled-components";

export const StyledFooter = styled.footer`
  padding: 1rem 0;
  div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    span {
      margin: 0 0.3rem;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.secColor};
      font-size: 0.9rem;
      transition: text-decoration 0.5s;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
