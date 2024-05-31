import "./SearchResult.scss";
import arrowBackIcon from "../../assets/icons/icon-arrow-back.svg";
import SearchBar from "../SearchBar/SearchBar";
import Netflix from "../../assets/images/netflix-logo.webp";

export default function SearchResult({setSearchInput, setIsSearchBarClicked, title}) {
  const submitHandler = (event) => {
    event.preventDefault();


  };

  return (
    <>
      <section className="search-result">
        <div className="search-result__search-bar-wrapper">
          <SearchBar setSearchInput={setSearchInput} setIsSearchBarClicked={setIsSearchBarClicked} />
        </div>

        <div className="search-result__breadcrumb-group">
          <img className="search-result__breadcrumb-icon" src={arrowBackIcon} />
          <p>Back</p>
        </div>
        <div className="search-page__divider"></div>

        <div className="search-result__content">
          <p>Streaming Services</p>
          <div className="search-result__gallery">
            <div className="search-result__service-card">
              <img className="search-result__service-logo" src={netflixLogo} />
              <button>Already in your Streaming Bundle</button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
