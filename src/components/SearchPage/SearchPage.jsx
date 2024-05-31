import "./SearchPage.scss";
import SearchBar from "../SearchBar/SearchBar";
import SearchDefault from "../SearchDefault/SearchDefault";
import { useState, useEffect } from "react";
import axios from 'axios';
import SearchResult from "../SearchResult/SearchResult";

const baseUrl = "http://localhost:8080";

function SearchPage({ isSearchBarClicked, setIsSearchBarClicked }) {
  const [searchInput, setSearchInput] = useState("");

  const [title, setTitle] = useState("");

  const getTitles = async (userInput) => {
    try {
      const response = await axios.get(`${baseUrl}/shows?name=${userInput}`);
      setTitle(response.data[0]);
    } catch (error) {
      console.error("Failed to fetch title data: ", error);
    }
  };

  useEffect(() => {
    console.log(title);
  }, [title]);

  if (!isSearchBarClicked) {
    return (
      <SearchDefault
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        // isSearchBarClicked={isSearchBarClicked}
        setIsSearchBarClicked={setIsSearchBarClicked}
        getTitles={getTitles}
      />
    );
  } else {
    return (
      <SearchResult
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setIsSearchBarClicked={setIsSearchBarClicked}
        title={title}
      />
    );
  }

  return (
    <>
      {/* <div>
            <SearchDefault />
        </div>
        <div>
            <SearchResult />
        </div> */}
    </>
  );
}

export default SearchPage;
