import { useState } from 'react';
import { MdMenu, MdClose } from "react-icons/md";
import './Header.scss';
import logo from '../../assets/react.svg';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo-container">
          <div className="header__logo-img-cont">
            <img src={logo} alt="Sharan Athiyadath logo image" className="header__logo-img" />
          </div>
          <span className="header__logo-title">Sharan Athiyadath</span>
        </div>
        <div className="header__main">
          <ul className="header__links">
            <li className="header__link-wrapper">
              <a href="./" className="header__link"> Home </a>
            </li>
            <li className="header__link-wrapper">
              <a href="./#about" className="header__link">About </a>
            </li>
            <li className="header__link-wrapper">
              <a href="./#projects" className="header__link"> Projects </a>
            </li>
            <li className="header__link-wrapper">
              <a href="./#contact" className="header__link"> Contact </a>
            </li>
          </ul>
          <div className="header__main-ham-menu-cont" onClick={toggleMenu}>
            <MdMenu className={`header__main-ham-menu ${menuOpen ? 'd-none' : ''}`} />
            <MdClose className={`header__main-ham-menu-close ${menuOpen ? '' : 'd-none'}`} />
          </div>
        </div>
      </div>
      <div className={`header__sm-menu ${menuOpen ? 'header__sm-menu--active' : ''}`}>
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            <li className="header__sm-menu-link" onClick={closeMenu}>
              <a href="./"> Home </a>
            </li>
            <li className="header__sm-menu-link" onClick={closeMenu}>
              <a href="./#about"> About </a>
            </li>
            <li className="header__sm-menu-link" onClick={closeMenu}>
              <a href="./#projects"> Projects </a>
            </li>
            <li className="header__sm-menu-link" onClick={closeMenu}>
              <a href="./#contact"> Contact </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
