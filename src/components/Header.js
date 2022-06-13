import React from 'react';
// react router 
import { Link } from "react-router-dom";
// scss 
import Styles from "../assets/styles/components_styles/Header.module.scss";

const Header = () => {
  return (
    <>
      <div className={Styles.headerContainer}>
        <div className={Styles.headerLeft}>
          <h5 className={Styles.orangeText}>Our Promise</h5>
          <h2 className={Styles.title}>
            <span>Boost Social Reach For </span>
            <span> Your Brand</span>
          </h2>
          <div className={Styles.description}>
            <p>Plan, execute, and track social media marketing campaigns. Customise and craft your content from multiple sourcers, while protecting your brand.</p>
          </div>
          <div className={Styles.link}>
            <Link to="">Get Started</Link>
          </div>
        </div>
        <div className={Styles.headerRight}>

        </div>
      </div>
    </>
  );
};

export default Header;