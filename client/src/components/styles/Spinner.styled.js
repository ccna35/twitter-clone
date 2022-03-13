import styled from "styled-components";

export const SpinnerStyle = styled.div`
  width: 30px;
  height: 30px;
  border: 4px solid lightblue;
  border-color: lightblue lightblue lightblue
    ${({ theme }) => theme.colors.mainColor};
  border-radius: 50%;
  animation: example infinite 0.75s linear;
  @keyframes example {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
