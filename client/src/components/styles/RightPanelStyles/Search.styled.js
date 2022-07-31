import styled from "styled-components";

export const SearchElement = styled.div`
  height: 53px;
  padding: 0.3rem 0;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.colors.BgColor};
  position: relative;
`;

export const SearchContainer = styled.form`
  display: inline-flex;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.borderColor};
  border-radius: 10rem;
  padding: 0.7rem 1.5rem;
  width: 100%;
`;

export const SearchInput = styled.input`
  display: inline-flex;
  font-family: inherit;
  font-size: 1rem;
  border: none;
  outline: none;
  flex-grow: 1;
  background: transparent;
  caret-color: ${({ theme }) => theme.colors.InputCursorColor};
  color: ${({ theme }) => theme.colors.textColor};
`;

export const SearchResults = styled.div`
  min-height: 7rem;
  min-width: 15rem;
  max-width: 18rem;
  background-color: ${({ theme }) => theme.colors.BgColor};
  border-radius: 0.25rem;
  padding: 1rem 0;
  position: absolute;
  box-shadow: 0px 0px 8px 0px #6d6d72;
  overflow: hidden;
  p {
    padding: 0 0.5rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.secColor};
  }
`;
