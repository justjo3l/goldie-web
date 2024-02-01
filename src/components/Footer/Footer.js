import './Footer.css';

import goldsteinLogo from '../../assets/goldstein-logo.png';

function Footer() {
  return (
    <footer id='footer'>
      <div className='footer-logo-container'>
        <img id='footer-logo' src={goldsteinLogo} alt='Goldstein Logo' />
      </div>
    </footer>
  );
}

export default Footer;
