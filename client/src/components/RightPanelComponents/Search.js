import React, { useRef, useState } from "react";
import {
  SearchContainer,
  SearchElement,
  SearchInput,
  SearchResults,
} from "../styles/RightPanelStyles/Search.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UserPhoto, UserPhotoContainer } from "../styles/NewTweet.styled";
import {
  FollowUserContainer,
  FollowUserHandle,
  FollowUserInfo,
  FollowUserName,
} from "../styles/RightPanelStyles/WhoToFollow.styled";
import useOnClickOutside from "../../custom hooks/useOnClickOutside";

function Search() {
  const [searchPopup, setSearchPopup] = useState(false);
  const [searchContent, setSearchContent] = useState("");

  const { users } = useSelector((state) => state.user);
  let newUsers;
  const handleSearchInput = (e) => {
    setSearchContent(e.target.value);
    console.log(searchContent);
    newUsers = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchContent) ||
        user.username.toLowerCase().includes(searchContent)
    );
    console.log(newUsers);
  };

  const searchRef = useRef(); // Left Panel ref.

  // This custom hook closes the modal or popup if the user clicked outside of them.
  useOnClickOutside(searchRef, () => setSearchPopup(false));

  return (
    <SearchElement ref={searchRef}>
      <SearchContainer>
        <FontAwesomeIcon
          icon={faSearch}
          size="lg"
          color="#536471"
        ></FontAwesomeIcon>
        <SearchInput
          type="text"
          placeholder="Search Twitter"
          onFocus={() => setSearchPopup(true)}
          onChange={(e) => handleSearchInput(e)}
        />
      </SearchContainer>
      {searchPopup && (
        <SearchResults>
          {searchContent.length === 0 ? (
            <p>Try searching for people, topics, or keywords</p>
          ) : (
            users
              .filter(
                (user) =>
                  user.name.toLowerCase().includes(searchContent) ||
                  user.username.toLowerCase().includes(searchContent)
              )
              // .slice(0, 3)
              .map((user) => {
                return (
                  <Link to={`/${user.username}`} key={user._id}>
                    <FollowUserContainer>
                      <UserPhotoContainer>
                        <UserPhoto
                          src={
                            user.profilePhoto
                              ? user.profilePhoto
                              : "./images/blank-profile-picture-gf8e58e24f_640.png"
                          }
                        />
                      </UserPhotoContainer>
                      <FollowUserInfo>
                        <FollowUserName>{user.name}</FollowUserName>
                        <FollowUserHandle>@{user.username}</FollowUserHandle>
                        <FollowUserHandle>{user.bio}</FollowUserHandle>
                      </FollowUserInfo>
                    </FollowUserContainer>
                  </Link>
                );
              })
          )}
        </SearchResults>
      )}
    </SearchElement>
  );
}

export default Search;
