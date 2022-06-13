import React from 'react';
// react router 
import { NavLink } from "react-router-dom";
// scss 
import Styles from "../assets/styles/components_styles/Navbar.module.scss";
// images 
import Logo from "../assets/images/logo-header.svg";
// react icons 
import { BiSearch } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
      <div className={Styles.navbarContainer}>
        <img className={Styles.siteLogo} src={Logo} alt="site_logo" />
        
        <div className={Styles.searchmenusignupIcon}>
        <nav className={Styles.ulNavbar}>
          <ul>
            <li>
              <NavLink to="/" className={navData => navData.isActive ? `${Styles.navlink} ${Styles.active}` : Styles.navlink}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" className={navData => navData.isActive ? `${Styles.navlink} ${Styles.active}` : Styles.navlink}>Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/blog" className={navData => navData.isActive ? `${Styles.navlink} ${Styles.active}` : Styles.navlink}>Blog</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navData => navData.isActive ? `${Styles.navlink} ${Styles.active}` : Styles.navlink}>About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navData => navData.isActive ? `${Styles.navlink} ${Styles.active}` : Styles.navlink}>Contact</NavLink>
            </li>
          </ul>
        </nav>
          <BiSearch className={Styles.serchIcon} />
          <button className={Styles.signupBtn}>Sign Up</button>
          <BiMenu className={Styles.menuIcon} />
        </div>
      </div>
    </>
  );
};

export default Navbar;