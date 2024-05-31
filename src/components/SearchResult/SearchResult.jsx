import "./SearchResult.scss";
import arrowBackIcon from "../../assets/icons/icon-arrow-back.svg";
import netflixLogo from "../../assets/images/netflix-logo.webp";
import SearchBar from "../SearchBar/SearchBar";

export default function SearchResult() {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <SearchBar />

      <section className="search-result">
        <div className="search-result__breadcrumb-group">
          <img className="search-result__breadcrumb-icon" src={arrowBackIcon} />
          <p>Back</p>
        </div>
        <div className="search-page__divider"></div>
        <p>Streaming Services</p>
        <div className="search-result__gallery">
          <div className="search-result__service-card">
            <img className="search-result__service-logo" src={netflixLogo} />
            <button>Already in your Streaming Bundle</button>
          </div>
        </div>
      </section>
    </>
  );
}
