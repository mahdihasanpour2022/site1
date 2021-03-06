import React from "react";
// components 
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Portfolio from "./components/Portfolio";
import Testimonial from "./components/Testimonial";
import Blogs from "./components/Blogs";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <AboutUs />
      <Portfolio />
      <Testimonial />
      <Blogs />
    </>
  );
}

export default App;
