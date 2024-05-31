import './Header.scss';
import telusLogo from '../../assets/images/logo.svg';

function Header () {
    return(
        <header className='header'>
            <img className='header__img' src={telusLogo} alt="Telus Logo" />
        </header>
    );
}

export default Header;