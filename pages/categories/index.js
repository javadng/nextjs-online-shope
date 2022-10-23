import ProductList from "../../components/Product/ProductList";
import SectionTitle from "../../components/UI/SectionTitle";
import getProductList from "../../lib/getProducts";
import ErrorMessage from "../../components/UI/ErrorMessage";

const CategoriesPage = props => {
  const { products } = props;

  if (props.error) {
    return <ErrorMessage message={props.error} />;
  }

  return (
    <div className="categories">
      <SectionTitle title="New Products" subtitle="summer 2022" />
      <ProductList products={products} />
      <SectionTitle title="Offer Products" subtitle="June 2022" />
      <ProductList products={products} />
      <SectionTitle title="most sell" subtitle="last weak" />
      <ProductList products={products} />
    </div>
  );
};

export default CategoriesPage;

export async function getStaticProps() {
  let errorMessage, productData;

  try {
    productData = await getProductList();
  } catch (error) {
    errorMessage = error.message || "Error with getting data💥💥.";
  }

  return {
    props: {
      products: productData || null,
      error: errorMessage || null,
    },
    revalidate: 3600,
  };
}
