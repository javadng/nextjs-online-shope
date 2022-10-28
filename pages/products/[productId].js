import { getSingleProduct } from "../../lib/getSingleProduct";
import classes from "../../styles/SingleProduct.module.scss";

import ProductDetail from "../../components/Product/SingleProduct/ProductDetail";
import LoadingSpinner from "../../components/UI/spinners/LoadingSpinner";
import SectionTitle from "../../components/UI/SectionTitle";

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

export async function getServerSideProps(context) {
  const { params } = context;
  let errorMessage, data;

  try {
    data = await getSingleProduct(params.productId);
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
