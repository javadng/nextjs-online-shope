import classes from "./Cart.module.scss";

import { useSelector } from "react-redux";

import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem";
import NavLink from "next/link";

const Cart = props => {
  const cartSlice = useSelector(state => state.cart);
  const { items, totalPrice } = cartSlice;

  const modalContent = items.map(item => (
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
    <Modal
      shownState={props.modalState}
      title="Your Cart"
      className={classes.modal}
      toggle={props.togglerFn}
    >
      {modalContent || (
        <p className="center-text fs-2 warning-color">No Item Add some..</p>
      )}
      <footer className={classes.cartFooter}>
        <span className={`btn ${classes.totalPrice}`}>
          totalPrice : $ {totalPrice.toFixed(2)}
        </span>
        <NavLink
          href="/checkout"
          onClick={props.togglerFn}
          className={`${classes.modal__btn} btn`}
        >
          Shopping &rarr;
        </NavLink>
      </footer>
    </Modal>
  );
};

export default Cart;
