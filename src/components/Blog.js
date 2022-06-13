import React from 'react';
// scss 
import Styles from "../assets/styles/components_styles/Blog.module.scss";

const Blog = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row m-0">
          <div className="col-12">
            <div className={Styles.blogHeader}>
              <h5>Blog</h5>
              <h3>Our Latest Posts</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;