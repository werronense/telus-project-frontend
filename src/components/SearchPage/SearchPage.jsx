import "./SearchPage.scss";
import netflixLogo from '../../assets/images/asset 28.webp'
import paramountLogo from '../../assets/images/asset 30.webp'
import craveLogo from '../../assets/images/asset 32.webp'
import hayuLogo from '../../assets/images/asset 39.webp'
import snwdLogo from '../../assets/images/asset 35.webp'

function SearchPage() {
  return (
    <section className="search-page">
      <h1 className="search-page__title">Where did my show go?</h1>
      <p className="search-page__description">
        Don't know where your favourite movie is anymore? Tired of searching
        through dozens of streaming services to look for the show you were
        watching until last week?
      </p>
      <h3 className="search-page__instruction">
        Search the title below and we will help add the streaming service to
        your bundle.
      </h3>

      <input className="search-page__search-input" type="search" />

      <div className="search-page__divider"></div>

      <h2 className="search-page__subtitle">Your Current bundle</h2>

      <div className="search-page__current-bundle-container">
        <div className="search-page__ss-logo-wrapper"><img className="search-page__ss-logo-img" src={netflixLogo} alt="Netflix Logo" /></div>
        <div className="search-page__ss-logo-wrapper"><img className="search-page__ss-logo-img" src={paramountLogo} alt="Netflix Logo" /></div>
        <div className="search-page__ss-logo-wrapper"><img className="search-page__ss-logo-img" src={craveLogo} alt="Netflix Logo" /></div>
        <div className="search-page__ss-logo-wrapper"><img className="search-page__ss-logo-img" src={hayuLogo} alt="Netflix Logo" /></div>
        <div className="search-page__ss-logo-wrapper"><img className="search-page__ss-logo-img" src={snwdLogo} alt="Netflix Logo" /></div>
      </div>
    </section>
  );
}

export default SearchPage;
