import InputChangeNumber from '../UI/InputChangeNumber';
import classes from './orderItem.module.scss';

const OrderItem = props => {
  const classNames = `${classes.item} ${props.className || ''}`;

  return (
    <li className={classNames}>
      <figure className={classes.item__img}>
        <img src={props.image} alt={props.name} />
      </figure>
      <span className={classes.name}>
        {props.name} x {props.number}
      </span>
      <InputChangeNumber
        className={classes.changeNum}
        id={props.id}
        name={props.name}
        price={props.price}
        quantity={props.number}
      />
      <span className={classes.price}>${props.totalPrice.toFixed(2)}</span>
    </li>
  );
};

export default OrderItem;
