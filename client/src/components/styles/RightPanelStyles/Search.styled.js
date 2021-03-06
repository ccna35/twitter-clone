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
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.mainColor};
  }
`;

export const SearchResults = styled.div`
  min-height: 10rem;
  min-width: 15rem;
  background-color: lightgray;
  border-radius: 2rem;
  padding: 1rem;
  position: absolute;
`;
