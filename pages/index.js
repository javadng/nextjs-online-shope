import { Fragment } from "react";
import Banner from "../components/banner/banner";
import AboutUs from "../components/AboutUs/AboutUs";
import Products from "../components/Product/Products";
import Blogs from "../components/blog/Blog";

const HomePage = () => {
  return (
    <Fragment>
      <Banner
        subTitle="terending 2022"
        title="Boutique Fashion"
        desc="Responsive React.js WebApp"
      />
      <AboutUs />
      <Products />
      <Blogs />
    </Fragment>
  );
};

export default HomePage;
