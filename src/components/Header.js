import React from 'react';
// react router 
import { Link } from "react-router-dom";
// scss 
import Styles from "../assets/styles/components_styles/Header.module.scss";
// images 
import girl from "../assets/images/hero-img.png";
import user1 from "../assets/images/users/user1.jpg";
import user2 from "../assets/images/users/user2.jpg";
import user3 from "../assets/images/users/user3.jpg";

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
          <div className={Styles.orangePLane}></div>
          <div className={Styles.whiteBox}>
            <p>+2.1M</p>
            <div className={Styles.users}>
              <img src={user1} alt="user1" />
              <img src={user2} alt="user2" />
              <img src={user3} alt="user3" />
            </div>
          </div>
          <div className={Styles.imageBox}>
            <img src={girl} alt="girl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;