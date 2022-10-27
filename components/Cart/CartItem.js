import Image from "next/image";
import InputChangeNumber from "../UI/InputChangeNumber";
import classes from "./CartItem.module.scss";

const CartItem = props => {
  const { id, img, totalPrice, quantity, name, price } = props;

  return (
    <li className={classes.productcart}>
      <div className={classes.product__detail}>
        <span className={classes.product__name}>{name}</span>
        <span>{totalPrice.toFixed(2)} $</span>
      </div>
      <figure className={classes.img__holder}>
        <Image alt={name} src={img} width={100} height={100} />
      </figure>
      <InputChangeNumber
        price={price}
        id={id}
        name={name}
        className={classes.changeInput}
        quantity={quantity}
      />
    </li>
  );
};

export default CartItem;
