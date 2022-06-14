import React from 'react';
// data 
import {blogs_list} from "../data/blogs_list";
// scss 
import Styles from "../assets/styles/components_styles/Blogs.module.scss";
// components 
import Blog from "./Blog";


const Blogs = () => {

  return (
    <>
      <div className="container-fluid overflow-hidden">
        <div className="row m-0">
          <div className="col-12">
            <div className={Styles.blogHeader}>
              <h5>Blog</h5>
              <h3>Our Latest Posts</h3>
              <hr />
            </div>
          </div>
        </div>
        <div className={`${Styles.blogs} row m-0`}>
        {!!blogs_list.length && blogs_list.slice(0,4).map(blog => <Blog key={blog.id} blog={blog}/> )}
        </div>
      </div>
    </>
  );
};

export default Blogs;