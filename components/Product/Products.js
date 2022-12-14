// import { useSelector } from "react-redux";
import Container from "../UI/Container";
import SectionTitle from "../UI/SectionTitle";
import ProductList from "./ProductList";
// import classes from './Products.module.scss';

const Products = props => {
  // const { notification } = useSelector(state => state.UI);
  return (
    <Container className="mb-5">
      <SectionTitle title="Products" subtitle="spring / summer 2022" />
      <ProductList products={props.products} />
    </Container>
  );
};

export default Products;
