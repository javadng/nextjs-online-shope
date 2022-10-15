import classes from './SingleItem.module.scss';

const SingleItem = props => {
  return (
    <li className={classes.item}>
      <figure>
        <img src={props.img} alt="" />
      </figure>
      <div className={classes.detaile}>
        <span className={classes.title}>{props.title}</span>
        <span className={classes.price}>$ {props.price}</span>
      </div>
    </li>
  );
};

export default SingleItem;
