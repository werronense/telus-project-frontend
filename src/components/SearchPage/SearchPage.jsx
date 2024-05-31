import "./SearchPage.scss";
import SearchBar from "../SearchBar/SearchBar";
import SearchDefault from "../SearchDefault/SearchDefault";
import { useState } from "react";
import SearchResult from "../SearchResult/SearchResult";

const baseUrl = "http://localhost:8080";

function SearchPage() {
  const [isSearchBarClicked, setisSearchBarClicked] = useState(false);

    const [searchInput, setSearchInput] = useState(null);

  const getTitles = async () => {
    // const response = await axios.get(`${baseUrl}/shows?name=${searchInput}`);
  };

  if (!isSearchBarClicked) {
    return <SearchDefault />;
  } else {
    return <SearchResult />;
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
