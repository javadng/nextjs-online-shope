import { useSelector } from 'react-redux';
import Container from '../UI/Container';
import SectionTitle from '../UI/SectionTitle';
import ProductList from './ProductList';
// import classes from './Products.module.scss';

const Products = props => {
  const { products } = useSelector(state => state.products);
  const { notification } = useSelector(state => state.UI);

  return (
    <Container className="mb-5">
      <SectionTitle title="Products" subtitle="spring / summer 2022" />
      <ProductList products={products} notification={notification} />
    </Container>
  );
};

export default Products;
