import styled from "styled-components";

export const LoginPageStyles = styled.section`
  background-color: white;
  button {
    &:nth-child(3) {
      background-color: ${({ theme }) => theme.colors.mainColor};
    }
  }
`;
