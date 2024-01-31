import './Header.css';

function Header({ children }) {
  return (
    <header id='header'>
        { children }
    </header>
  );
}

export default Header;
