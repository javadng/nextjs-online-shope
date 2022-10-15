import { useSelector } from 'react-redux';
import OrderItem from './OrderItem';

import classes from './OrderList.module.scss';

const OrderList = props => {
  const items = useSelector(state => state.cart.items);

  return (
    <ul className={classes.list}>
      {items.map(item => (
        <OrderItem
          key={item.id}
          id={item.id}
          name={item.name}
          number={item.quantity}
          totalPrice={item.totalPrice}
          price={item.price}
          quantity={item.quantity}
          image={item.image}
        />
      ))}
    </ul>
  );
};

export default OrderList;
