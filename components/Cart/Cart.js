import classes from "./Cart.module.scss";

import { useSelector } from "react-redux";

import CartItem from "./CartItem";
import NavLink from "next/link";

const Cart = props => {
  const cartSlice = useSelector(state => state.cart);

  const { items, totalPrice } = cartSlice;

  const cartContent = items.map(item => (
    <CartItem
      key={item.id}
      quantity={item.quantity}
      totalPrice={item.totalPrice}
      id={item.id}
      price={item.price}
      img={item.image}
      name={item.name}
    />
  ));

  return (
    <ul>
      {cartContent}
      <footer className={classes.cartFooter}>
        <span className={classes.totalPrice}>
          totalPrice : $ {totalPrice.toFixed(2)}
        </span>
        <NavLink href="/checkout">
          <span className={classes.modal__btn}>Shopping &rarr;</span>
        </NavLink>
      </footer>
    </ul>
  );
};

export default Cart;
