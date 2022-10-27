import Image from "next/image";
import classes from "./SingleItem.module.scss";

const SingleItem = props => {
  return (
    <li className={classes.item}>
      <figure>
        <Image src={props.img} alt="" width={100} height={100} />
      </figure>
      <div className={classes.detaile}>
        <span className={classes.title}>{props.title}</span>
        <span className={classes.price}>$ {props.price}</span>
      </div>
    </li>
  );
};

export default SingleItem;
