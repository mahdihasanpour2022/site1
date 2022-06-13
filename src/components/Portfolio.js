import React from 'react';
// scss 
import Styles from "../assets/styles/components_styles/Portfolio.module.scss";
// images 
import portfolio1 from "../assets/images/portfolio/portfolio-1-img-768x699.jpg";
import portfolio2 from "../assets/images/portfolio/portfolio-2-img-768x699.jpg";
import portfolio3 from "../assets/images/portfolio/portfolio-3-img-768x699.jpg";
import portfolio4 from "../assets/images/portfolio/portfolio-4-img-768x699.jpg";
import portfolio5 from "../assets/images/portfolio/portfolio-5-img-768x699.jpg";
import portfolio6 from "../assets/images/portfolio/portfolio-6-img-768x699.jpg";
import portfolio7 from "../assets/images/portfolio/portfolio-7-img-768x699.jpg";
import portfolio8 from "../assets/images/portfolio/portfolio-8-img-768x699.jpg";

const Portfolio = () => {
  return (
    <>
      <div className="container-fluid my-4">
        <div className="row">
          <div className="col-12">
            <div className={Styles.porfoliotitle}>
              <h5>Portfolio</h5>
              <h2>Our Latest Work</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-md-10">
            <div className={Styles.portfolioBox}>
              <img src={portfolio1} alt="portfolio1" />
              <img src={portfolio2} alt="portfolio2" />
              <img src={portfolio3} alt="portfolio3" />
              <img src={portfolio4} alt="portfolio4" />
              <img src={portfolio5} alt="portfolio5" />
              <img src={portfolio6} alt="portfolio6" />
              <img src={portfolio7} alt="portfolio7" />
              <img src={portfolio8} alt="portfolio8" />
            </div>
          </div>
          <div className="col-6 col-md-2">
            <div className={Styles.bluePolygon}>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;