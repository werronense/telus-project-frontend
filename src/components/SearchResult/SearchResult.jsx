import "./SearchResult.scss";
import searchIcon from "../../assets/icons/icon-search.svg";
import arrowBackIcon from "../../assets/icons/icon-arrow-back.svg";
import netflixLogo from "../../assets/images/netflix-logo.webp";

export default function SearchResult() {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="search-page__input-icon-container">
        <form className="search-page__search-form" onSubmit={submitHandler}>
          <input className="search-page__search-input" type="search" />
          <button className="search-page__search-button">
            <img
              className="search-page__search-icon"
              src={searchIcon}
              alt="Search Icon"
            />
          </button>
        </form>
      </div>

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
