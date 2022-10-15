import InputChangeNumber from '../UI/InputChangeNumber';
import classes from './CartItem.module.scss';

const CartItem = props => {
  const { id, img, totalPrice, quantity, name, price } = props;

  return (
    <li className={classes.productcart}>
      <div className={classes.product__detail}>
        <span className={classes.product__name}>{name}</span>
        <span>{totalPrice.toFixed(2)} $</span>
      </div>
      <figure className={classes.img__holder}>
        <img alt={name} src={img} />
      </figure>
      <InputChangeNumber
        price={price}
        id={id}
        name={name}
        quantity={quantity}
        className={classes.changeInput}
      />
    </li>
  );
};

export default CartItem;
