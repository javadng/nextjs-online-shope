import { Fragment } from "react";
import Banner from "../components/banner/banner";
import AboutUs from "../components/AboutUs/AboutUs";
import Products from "../components/Product/Products";
import Blogs from "../components/blog/Blog";
import getProductList from "../lib/getProducts";
import getBlogsList from "../lib/getBlogsList";
import ErrorMessage from "../components/UI/ErrorMessage";
import Modal from "../components/UI/Modal/Modal";

const HomePage = props => {
  let pageContent;

  if (props.error) {
    pageContent = <ErrorMessage message={props.error} />;
  }

  if (!props.error) {
    pageContent = (
      <Fragment>
        <Products products={props.products} />
        <Blogs blogs={props.blogsList} />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Banner
        subTitle="terending 2022"
        title="Boutique Fashion"
        desc="Responsive React.js WebApp"
      />
      <AboutUs />
      <Modal
        shownState={props.modalState}
        title="Your Cart"
        toggle={props.togglerFn}
      />
      {pageContent}
    </Fragment>
  );
};

export default HomePage;

export async function getStaticProps() {
  let errorMessage, productData, blogPosts;

  try {
    productData = await getProductList();
    blogPosts = await getBlogsList();
  } catch (error) {
    errorMessage = error.message || "Error with getting data💥💥.";
  }

  return {
    props: {
      blogsList: blogPosts || null,
      products: productData || null,
      error: errorMessage || null,
    },
    revalidate: 3600,
  };
}

// export async function getStaticPaths() {}
