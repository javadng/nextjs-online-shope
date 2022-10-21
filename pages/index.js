import { Fragment } from "react";
import Banner from "../components/banner/banner";
import AboutUs from "../components/AboutUs/AboutUs";
import Products from "../components/Product/Products";
import Blogs from "../components/blog/Blog";
import getProductList from "../lib/getProducts";
import getBlogsList from "../lib/getBlogsList";

const HomePage = props => {
  return (
    <Fragment>
      <Banner
        subTitle="terending 2022"
        title="Boutique Fashion"
        desc="Responsive React.js WebApp"
      />
      <AboutUs />
      <Products products={props.products} />
      <Blogs blogs={props.blogsList} />
    </Fragment>
  );
};

export default HomePage;

export async function getStaticProps() {
  const productData = await getProductList();
  const blogPosts = await getBlogsList();

  return {
    props: {
      products: productData,
      blogsList: blogPosts,
    },
  };
}

// export async function getStaticPaths() {}
