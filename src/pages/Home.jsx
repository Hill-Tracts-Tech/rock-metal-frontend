import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/slider/Slider";
import Trendings from "../components/Trendings";
import Features from "../components/Features";
const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Trendings />
      <Products />
      <Features />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
