import React from "react";
import Categories from "../components/Categories";
// import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/slider/Slider";
import Trendings from "../components/Trendings";
import Features from "../components/Features";
import Ordersectionads from "../components/Ordersectionads";
import Expilation from "../components/Expilation";
const Home = () => {
  return (
    <div>
      <Slider />
      <Categories />
      <Trendings />
      <Products />
      <Features />
      <Ordersectionads />
      <Expilation />
    </div>
  );
};

export default Home;
