import { useSelector } from 'react-redux';
import Button from '../UI/Button';
import Coupon from './Coupon';
import OrderList from './OrderList';
import classes from './orderSection.module.scss';

const OrderSection = props => {
  const { totalPrice } = useSelector(state => state.cart);

  return (
    <div className={classes.order}>
      <Coupon />
      <div className={classes.yourOrder}>
        <h1 className={classes.title}>Your Order</h1>
        <span className={classes.productTitle}>Product</span>
        <span className={classes.productPrice}>Price</span>
      </div>
      <OrderList />
      <div className={classes.totalOrder}>
        <span>Total Order :</span>
        <span className={classes.price}>$ {totalPrice.toFixed(2)}</span>
      </div>
      <Button className={classes.order__btn}>Place order</Button>
    </div>
  );
};

export default OrderSection;
