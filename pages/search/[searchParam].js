import { Fragment } from "react";
import ProductList from "../../components/Product/ProductList";
import ErrorMessage from "../../components/UI/ErrorMessage";
import SectionTitle from "../../components/UI/SectionTitle";
import LoadingSpinner from "../../components/UI/spinners/LoadingSpinner";
import searchProduct from "../../lib/searchProduct";

const SerachPage = props => {
  return (
    <Fragment>
      <SectionTitle title="You search for :" subtitle={props.searchParam} />
      {/* {!props.products.length && <LoadingSpinner />} */}
      {props.products && <ProductList products={props.products} />}
      {!props.products.length && <ErrorMessage message="No product Found" />}
    </Fragment>
  );
};

export default SerachPage;

export async function getServerSideProps(context) {
  const { searchParam } = context.params;

  const products = await searchProduct(searchParam);

  return {
    props: {
      searchParam,
      products,
    },
  };
}
