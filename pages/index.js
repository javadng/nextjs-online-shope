import { Fragment } from "react";
import Banner from "../components/banner/banner";
import AboutUs from "../components/AboutUs/AboutUs";
import Products from "../components/Product/Products";
import Blogs from "../components/blog/Blog";
import ErrorMessage from "../components/UI/ErrorMessage";
import Modal from "../components/UI/Modal/Modal";
import { gql } from "@apollo/client";
import client from "../lib/apollo";
import { useCookies } from "react-cookie";

const HomePage = props => {
  const [cookie, setCookie] = useCookies(["user"]);

  const { error, products, blogsList } = props;
  let pageContent;

  if (error) {
    pageContent = <ErrorMessage message={props.error} />;
  }

  if (!error) {
    pageContent = (
      <Fragment>
        <Products products={products} />
        <Blogs blogs={blogsList} />
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
    const GET_PRODUCTS = gql`
      query GET_HOME_DATA {
        products {
          nodes {
            date
            id
            name
            title
            uri
            image {
              id
              sourceUrl
            }
            shortDescription
            ... on SimpleProduct {
              price
            }
          }
        }
        posts {
          nodes {
            date
            id
            title
            uri
            categories {
              nodes {
                slug
                uri
              }
            }
          }
        }
      }
    `;

    const result = await client.query({ query: GET_PRODUCTS });

    productData = result?.data?.products?.nodes;
    blogPosts = result?.data?.posts?.nodes;
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
