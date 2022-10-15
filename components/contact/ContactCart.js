import Button from '../UI/Button';
import classes from './ContactCart.module.scss';

const ContactCart = props => {
  const cartClass = `${props.isCentered ? classes['cart--center'] : ''} ${
    classes.cart
  }`;
  return (
    <div className={cartClass}>
      <h1 className={classes.title}>{props.title}</h1>
      <p className={classes.desc}>{props.desc}</p>
      <Button className={classes.btn}>{props.btnText}</Button>
    </div>
  );
};

export default ContactCart;
