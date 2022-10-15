import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { uiActions } from '../../store/ui-slice';

import classes from './InputChangeNumber.module.scss';

const InputChangeNumber = props => {
  const customClasses = `${props.className || ''} ${classes.number__procut}`;
  const { id, quantity, name, price } = props;

  const dispatch = useDispatch();

  const increaseHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
        quantity,
      })
    );

    dispatch(
      uiActions.showNotification({
        status: 'ADD_ITEM',
        titile: '',
        message: 'Item Added to cart',
      })
    );
  };

  const decreaseHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };
  return (
    <div className={customClasses}>
      {quantity === 1 && (
        <FontAwesomeIcon
          className={classes.trash}
          icon={solid('trash')}
          onClick={decreaseHandler}
        />
      )}
      {quantity > 1 && (
        <span className={classes.decrease} onClick={decreaseHandler}>
          -
        </span>
      )}
      <input type="number" min="0" disabled placeholder={quantity} />
      <span className={classes.increase} onClick={increaseHandler}>
        +
      </span>
    </div>
  );
};

export default InputChangeNumber;
