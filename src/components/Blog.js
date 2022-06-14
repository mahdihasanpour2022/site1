import React from 'react';
// router dom 
import { Link } from "react-router-dom";
// scss 
import Styles from "../assets/styles/components_styles/Blog.module.scss";
// react icons 
import { BsFillPlayFill } from "react-icons/bs";


const Blog = ({ blog }) => {

  // const shorten_3 = (text) => {
  //   return text.split().slice(0, 3).join(" ")
  // }
  const shorten_15 = (text) => {
    return `${text.split(" ").slice(0, 15).join(" ")} .....`
  }

  // destructuring 
  const { id, image, title, date, body } = blog;
  return (
    <>
      <div className={Styles.blog}>
        <div className={Styles.blogContainer}>
          <div className={Styles.imageBox}>
          <img src={image} alt={id} />
          </div>
          <div className={Styles.blogContent}>
            <div className={Styles.dateBox}>
              <p>${date} </p> <span> by</span>
            </div>
            <h4>{title}</h4>
            <p>{shorten_15(body)}</p>
            <div className={Styles.readmore}>
              <div className={Styles.playIconBox}>
                <BsFillPlayFill />
              </div>
              <Link to="/" >Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;