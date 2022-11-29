import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/NewsLetter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>DANS. | HOME</title>
        </Helmet>
      </HelmetProvider>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
