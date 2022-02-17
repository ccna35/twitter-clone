import React from "react";
import {
  SearchContainer,
  SearchElement,
  SearchInput,
} from "../styles/RightPanelStyles/Search.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Search() {
  return (
    <SearchElement>
      <SearchContainer>
        <FontAwesomeIcon
          icon={faSearch}
          size="lg"
          color="#536471"
        ></FontAwesomeIcon>
        <SearchInput type="text" placeholder="Search Twitter" />
      </SearchContainer>
    </SearchElement>
  );
}

export default Search;
