import { useState } from 'react';
import classes from './Coupon.module.scss';

const Coupon = props => {
  const [visibileState, setVisibileState] = useState(false);

  const couponVisibiltyHandler = () => {
    setVisibileState(state => !state);
  };

  const couponClasses = `${classes.coupon} ${
    visibileState ? classes.isActive : ''
  }`;

  return (
    <div className={couponClasses}>
      <form className={classes.coupon__form}>
        <input type="text" />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
      <span>
        Have a{' '}
        <span
          onClick={couponVisibiltyHandler}
          className={classes.coupon__Click}
        >
          coupon
        </span>{' '}
        ? Click here to enter your code.
      </span>
    </div>
  );
};

export default Coupon;
