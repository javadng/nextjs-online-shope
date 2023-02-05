import { getSingleProduct } from "../../lib/getSingleProduct";
import classes from "../../styles/SingleProduct.module.scss";

import ProductDetail from "../../components/Product/SingleProduct/ProductDetail";
import LoadingSpinner from "../../components/UI/spinners/LoadingSpinner";
import SectionTitle from "../../components/UI/SectionTitle";
import { gql } from "@apollo/client";
import client from "../../lib/apollo";

const SingleProduct = props => {
  const { productData, error } = props;
  let pageContent;

  if (productData || !error) {
    pageContent = (
      <div className={classes.single__product}>
        <ProductDetail
          productDetail={productData}
          className={classes.detaile}
        />
        <SectionTitle
          title="New Products"
          subtitle="Summer 2022"
          className={classes.newProductsTitle}
        />
      </div>
    );
  } else {
    pageContent = <LoadingSpinner />;
  }

  return pageContent;
};

export default SingleProduct;

export async function getStaticProps(context) {
  // const {} = context.parmas;

  let errorMessage, data;

  try {
    const { slug } = context.params;
    const GET_SINGL_PRODUCT = gql`
      query GET_SINGL_PRODUCT($id: ID!) {
        product(id: $id, idType: SLUG) {
          date
          description
          image {
            sourceUrl
            title
            slug
          }
          name
          title
          ... on SimpleProduct {
            id
            price
          }
          galleryImages {
            nodes {
              id
              sourceUrl
            }
          }
        }
      }
    `;

    const result = await client.query({
      query: GET_SINGL_PRODUCT,
      variables: { id: slug },
    });

    data = result?.data?.product;
  } catch (error) {
    errorMessage = error.message;
  }
  return {
    props: {
      productData: data || null,
      error: errorMessage || null,
    },
  };
}

export async function getStaticPaths(context) {
  const GET_PRODUCTS_URI = gql`
    query GET_PRODUCTS_URI {
      products {
        nodes {
          id
          uri
        }
      }
    }
  `;

  const result = await client.query({ query: GET_PRODUCTS_URI });

  const paths = result?.data?.products?.nodes.map(item => ({
    params: { slug: item.uri },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}
