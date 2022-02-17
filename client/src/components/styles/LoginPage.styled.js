import styled from "styled-components";

export const LoginPageStyles = styled.section`
  button {
    &:nth-child(3) {
      background-color: ${({ theme }) => theme.colors.mainColor};
    }
  }
`;
