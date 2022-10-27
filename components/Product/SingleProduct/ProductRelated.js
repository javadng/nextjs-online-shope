import classes from "./ProductRelated.module.scss";
import SingleItem from "./SingleItem";
import imgp from "../../../public/images/photo-1.jpg";

const ProductRelated = props => {
  const classNameProp = `${classes.related} ${props.className}`;

  return (
    <div className={classNameProp}>
      <h1 className={classes.title}>Related Products</h1>
      <SingleItem img={imgp} price={22} title="Product Test" />
      <SingleItem img={imgp} price={22} title="Product Test" />
      <SingleItem img={imgp} price={22} title="Product Test" />
      <SingleItem img={imgp} price={22} title="Product Test" />
    </div>
  );
};

export default ProductRelated;
