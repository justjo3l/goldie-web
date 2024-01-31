import { Link } from 'react-router-dom';
import './NavBar.css';

import goldsteinLogo from '../../assets/goldstein-logo.png';

function NavBar() {
  return (
    <nav id='navbar'>
        <ul id='navbar-container'>
            <li id='navbar-logo-container'>
                <img id='navbar-logo' src={goldsteinLogo} alt='Goldstein Logo' />
            </li>
            <div id='navbar-links'>
                <li>
                    <Link to="/" className='link'>Home</Link>
                </li>
                <li>
                    <Link to="/about" className='link'>About</Link>
                </li>
                <li>
                    <Link to="/dino" className='link'>Dino</Link>
                </li>
                <li>
                    <Link to="/shop" className='link'>Shop</Link>
                </li>
                <li>
                    <Link to="/house-committee" className='link'>House Committee</Link>
                </li>
                <li>
                    <Link to="/tkc" className='link'>TKC</Link>
                </li>
            </div>
        </ul>
    </nav>
  );
}

export default NavBar;
