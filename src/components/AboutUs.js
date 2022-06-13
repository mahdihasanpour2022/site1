import React from 'react';
// scss 
import Styles from "../assets/styles/components_styles/AboutUs.module.scss";
// images 
import aboutus from "../assets/images/about-us-img.jpg";
// react icons 
import { MdDone } from "react-icons/md";

const AboutUs = () => {
  return (
    <>
      <div className="conatiner-fluid my-4" >
        <div className="row m-0">

          <div className="col-md-6">
            <div className={Styles.leftAboutus}>
              <h5>About Us</h5>
              <h3>We Have Creative Team Built Your Social Media</h3>
              <hr />
              <p className={Styles.description}>
                Our Mission Is To Provide Quality English Language Instruction Through A Variety Of Courses To International And Local Students In A Professional And Supportive Atmosphere.
              </p>

              <div className={Styles.features}>

                <div className={Styles.feature}>
                  <div>
                    <div className={Styles.doneIconBox}>
                      <MdDone />
                    </div>
                    <p>Easy to Manage</p>
                  </div>
                </div>

                <div className={Styles.feature}>
                  <div>
                    <div className={Styles.doneIconBox}>
                      <MdDone />
                    </div>
                    <p>Fast Processing</p>
                  </div>
                </div>

                <div className={Styles.feature}>
                  <div>
                    <div className={Styles.doneIconBox}>
                      <MdDone />
                    </div>
                    <p>Highly Professional</p>
                  </div>
                </div>

                <div className={Styles.feature}>
                  <div>
                    <div className={Styles.doneIconBox}>
                      <MdDone />
                    </div>
                    <p>Protect Business</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

          <div className="col-md-6">
            <div className={Styles.rightAboutus}>
              <img src={aboutus} alt="aboutus" />
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default AboutUs;