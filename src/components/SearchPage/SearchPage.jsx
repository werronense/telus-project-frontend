import "./SearchPage.scss";

import searchIcon from "../../assets/icons/icon-search.svg";

const submitHandler = (event) => {
    event.preventDefault();
}

function SearchPage() {
  return (
    <section className="search-page">
      <div className="search-page__container">
        <h1 className="search-page__title">Where did my show go?</h1>
        <p className="search-page__description">
          Don't know where your favourite movie is anymore?
          <br />
          Tired of searching through dozens of streaming services to look for
          the show you were watching until last week?
        </p>
        <h3 className="search-page__instruction">
          Search the title below and we will help add the streaming service to
          your bundle.
        </h3>

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

        <div className="search-page__divider"></div>

        <h2 className="search-page__subtitle">Your Current bundle</h2>

        <div className="search-page__current-bundle-container">
          <div className="search-page__ss-logo-wrapper">
            <div className="search-page__ss-logo-img netflix"></div>
          </div>
          <div className="search-page__ss-logo-wrapper">
            <div className="search-page__ss-logo-img paramount"></div>
          </div>
          <div className="search-page__ss-logo-wrapper">
            <div className="search-page__ss-logo-img crave"></div>
          </div>
          <div className="search-page__ss-logo-wrapper">
            <div className="search-page__ss-logo-img hayu"></div>
          </div>
          <div className="search-page__ss-logo-wrapper">
            <div className="search-page__ss-logo-img snwd"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchPage;
