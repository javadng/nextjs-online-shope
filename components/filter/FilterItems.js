import classes from './FilterItems.module.scss';
import useInput from '../../hooks/use-input';
import { useEffect, useState } from 'react';

const FilterItems = props => {
  let { value: inputValue, onChangeHandler: inputOnChageHandler } = useInput();

  const [inputRange, setInputValue] = useState(props.max);

  useEffect(() => {
    setInputValue(inputValue === '' ? props.max : inputValue);
    props.setValue(inputRange);
  }, [inputValue, props, inputRange]);

  return (
    <div className={classes.filter}>
      <h1 className={classes.title}>Filter</h1>
      <label htmlFor="priceRange">Filter Price :</label>
      <input
        step="5"
        id="priceRange"
        type="range"
        min={props.min}
        max={props.max}
        value={inputRange}
        onChange={inputOnChageHandler}
        className={classes.inputRange}
      />
      <div className={classes.filterPrice}>
        <span>from: $ {props.min}</span>
        <span>to: $ {Math.round(inputRange)}</span>
      </div>
    </div>
  );
};

export default FilterItems;
