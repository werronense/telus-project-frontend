import './Header.scss';
import telusLogo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

function Header () {
    return(
        <header className='header'>
            <Link className='header__logo-link' to='/SearchPage'>
                <img className='header__logo-img' src={telusLogo} alt="Telus Logo" />
            </Link>
        </header>
    );
}

export default Header;