import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { cartActions } from "../../store/cart-slice";
import { GiShoppingCart } from "react-icons/gi";
import { AiFillHeart } from "react-icons/ai";
import Link from "next/link";
import parse from "html-react-parser";
import Button from "../UI/Button";
import InputChangeNumber from "../UI/InputChangeNumber";
import React from "react";
import Image from "next/image";

const ProductItem = props => {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.cart);

  const { name, description, price, id } = props;
  const cartItemExisted = items.find(item => item.id === id);
  let cartAddBtn;

  const descriptionHtml = parse(description);

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
      <Button className="addbtn flex-center" onClick={addToCartHandler}>
        <span className="btnText">Add to Cart</span>
        <GiShoppingCart fontSize="3rem" />
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

  const imageLoader = ({ src, width, quality }) => {
    // return src;
    return `${src}?w=${width}`;
  };

  return (
    <div className="productitem">
      <figure className="productitem__img">
        <Image
          loader={imageLoader}
          src={props.img}
          layout="fill"
          alt="product item"
        />
        <div className="productitem__icons">
          <AiFillHeart color="red" />
        </div>
      </figure>
      <Link href={`/products/${id}`}>
        <span className="productitem--title">{name} &rarr;</span>
      </Link>
      <div className="productitem--desc">{descriptionHtml}</div>
      <span className="price">{price}</span>
      {cartAddBtn}
    </div>
  );
};

export default ProductItem;
