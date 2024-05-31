import "./SearchBar.scss";
import searchIcon from "../../assets/icons/icon-search.svg";

export default function SearchBar({setSearchInput, setIsSearchBarClicked, getTitles}) {
  const submitHandler = (event) => {
    event.preventDefault();

    setSearchInput(event.target.search.value);
    setIsSearchBarClicked(true);
    getTitles(event.target.search.value);
  };

  return (
    <div className="search-bar__input-icon-container">
      <form className="search-bar__search-form" onSubmit={submitHandler}>
        <input
          className="search-bar__search-input"
          name="search"
          type="search"
          placeholder="Search Movie/TV Show Title"
        />
        <button className="search-bar__search-button">
          <img
            className="search-bar__search-icon"
            src={searchIcon}
            alt="Search Icon"
          />
        </button>
      </form>
    </div>
  );
}
