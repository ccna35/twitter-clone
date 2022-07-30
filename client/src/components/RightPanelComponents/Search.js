import React from "react";
import {
  SearchContainer,
  SearchElement,
  SearchInput,
  SearchResults,
} from "../styles/RightPanelStyles/Search.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Search() {
  const [searchPopup, setSearchPopup] = useState(false);
  return (
    <SearchElement>
      <SearchContainer>
        <FontAwesomeIcon
          icon={faSearch}
          size="lg"
          color="#536471"
        ></FontAwesomeIcon>
        <SearchInput
          type="text"
          placeholder="Search Twitter"
          onFocus={() => setSearchPopup((prev) => !prev)}
        />
      </SearchContainer>
      {searchPopup && (
        <SearchResults>
          Try searching for people, topics, or keywords
        </SearchResults>
      )}
    </SearchElement>
  );
}

export default Search;
