import React from 'react';
// scss 
import Styles from "../assets/styles/components_styles/Services.module.scss";
// react icons
import { BsCalendar2Month } from "react-icons/bs";
import { GiChart } from "react-icons/gi";
import { GiNotebook } from "react-icons/gi";
import { MdOutlineAnalytics } from "react-icons/md";

const Services = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row">

          <div className="col-md-6">
            <div className={Styles.leftServices}>

              <div className={Styles.card1}>
                <div>
                  <div className={Styles.cardIcon}>
                    <BsCalendar2Month />
                  </div>
                  <h4>PLANNING</h4>
                </div>
              </div>

              <div className={Styles.card2}>
                <div>
                  <div className={Styles.cardIcon}>
                    <GiChart />
                  </div>
                  <h4>PUBLISHING</h4>
                </div>
              </div>

              <div className={Styles.card3}>
                <div>
                  <div className={Styles.cardIcon}>
                    <GiNotebook />
                  </div>
                  <h4>SUGGESTIONS</h4>
                </div>
              </div>

              <div className={Styles.card4}>
                <div>
                  <div className={Styles.cardIcon}>
                    <MdOutlineAnalytics />
                  </div>
                  <h4>ANALYSING</h4>
                </div>
              </div>

            </div>
          </div>

          <div className="col-md-6">
            <div className={Styles.rightServices}>
              <h5>Our Services</h5>
              <h3>Make Your Social Media & Content Marketing Better</h3>
              <hr />
              <p className={Styles.description}>
                When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper surface.The quick, brown fox jumps over a lazy dog DJs flock by when MTV ax quiz prog.
              </p>
              <button>Try Now</button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Services;