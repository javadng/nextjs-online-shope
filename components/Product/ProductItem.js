import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { uiActions } from "../../store/ui-slice";

import Link from "next/link";

import Button from "../UI/Button";
import InputChangeNumber from "../UI/InputChangeNumber";
import React from "react";

const ProductItem = props => {
  const dispatch = useDispatch();

  const { items } = useSelector(state => state.cart);

  const { name, description, price, id } = props;

  const cartItemExisted = items.find(item => item.id === id);

  let cartAddBtn;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
        image: props.img,
      })
    );

    dispatch(
      uiActions.showNotification({
        status: "ADD_ITEM",
        titile: "",
        message: "Item Added to cart",
      })
    );
  };

  if (!cartItemExisted) {
    cartAddBtn = (
      <Button className="addbtn" onClick={addToCartHandler}>
        <span className="btnText">Add to Cart</span>
        <FontAwesomeIcon icon={solid("shopping-cart")} />
      </Button>
    );
  } else {
    cartAddBtn = (
      <InputChangeNumber
        className="inputChangeItem"
        id={id}
        quantity={cartItemExisted.quantity}
        price={price}
        name={name}
      />
    );
  }

  return (
    <div className="productitem">
      <figure className="productitem__img">
        <img src={props.img} alt="product item" />
        <div className="productitem__icons">
          <FontAwesomeIcon icon={solid("heart")} color="red" />
          <FontAwesomeIcon icon={solid("user-circle")} color="#fff" />
        </div>
      </figure>
      <Link to={`/${id}`} className="productitem--title">
        {name} &rarr;
      </Link>
      <p className="productitem--desc">{description}</p>
      <span className="price">${price.toFixed(2)}</span>
      {cartAddBtn}
    </div>
  );
};

export default ProductItem;
