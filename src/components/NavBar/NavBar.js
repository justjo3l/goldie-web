import { Link } from 'react-router-dom';
import './NavBar.css';

import goldsteinLogo from '../../assets/goldstein-logo.png';
import hamburgerMenu from '../../assets/hamburger-menu.png';

import { useState } from 'react';

function NavBar() {

    const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
    const [menuOpen, setMenuOpen] = useState(false);

    window.onresize = () => { setCurrentWidth(window.innerWidth) }

    const onMenuClick = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav id='navbar'>
            <ul id='navbar-container'>
                <li id='navbar-logo-container'>
                    <img id='navbar-logo' src={goldsteinLogo} alt='Goldstein Logo' />
                    {currentWidth <= 800 &&
                        <img id='navbar-menu' src={hamburgerMenu} onClick={onMenuClick} alt='Menu' />
                    }
                </li>
                <div id='navbar-links' style={{display: currentWidth <= 800 && !menuOpen && "none"}}>
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
