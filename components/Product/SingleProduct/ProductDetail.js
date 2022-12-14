import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import { uiActions } from "../../../store/ui-slice";
import ImageSlider from "../../carousel/image-slider";
import Button from "../../UI/Button";
import InputChangeNumber from "../../UI/InputChangeNumber";

import classes from "./ProductDetail.module.scss";
import SingleTabs from "./SingleTabs";

const ProductDetail = props => {
  const containerClasses = `${props.className} ${classes.product__container}`;
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, []);

  const {
    id,
    AdditionalInfo,
    baseImgUrl,
    description,
    name,
    price,
    reviews,
    subImgsUrl,
    viewsInfo,
    quantity,
  } = props.productDetail;

  const [imgUrlState, setImgUrlState] = useState(baseImgUrl);

  const increaseHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        quantity,
        image: baseImgUrl,
        price,
      })
    );

    dispatch(
      uiActions.showNotification({
        status: "success",
        titile: "",
        message: "Item Added to cart",
      })
    );
  };

  const getImgUrlSource = imgUrl => {
    if (!imgUrl) return;

    setImgUrlState(imgUrl);
  };

  return (
    <div className={containerClasses}>
      <div className={classes.product__image}>
        <figure className={classes.figureImg}>
          <div className={classes.img_wrapper}>
            <Image
              src={imgUrlState}
              alt={name}
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
          <ImageSlider
            onClick={getImgUrlSource}
            Images={subImgsUrl}
            className={classes.subimages}
          />
        </figure>
      </div>
      <div className={classes.detaile}>
        <h1 className={classes.title}>{name}</h1>
        <div className={classes.views}>
          <span>{viewsInfo.commentsNumber} Comments</span> |
          <span>{viewsInfo.viewsNumber} Views</span>
        </div>
        <div className={classes.productdesc}>
          <span className={classes.price}>${price} ~ $300</span>
          <p className={classes.desc}>{description}</p>
        </div>
        <div className={classes.addoptions}>
          <InputChangeNumber
            className={classes.changeQuantities}
            price={price}
            id={id}
            name={name}
            quantity={quantity}
          />
          <Button
            onClick={increaseHandler}
            className={`${classes.product__btn} btn-animated`}
          >
            Add to Cart
          </Button>
        </div>
      </div>
      <SingleTabs
        reviews={reviews}
        AdditionalInformation={AdditionalInfo}
        desc={description}
        className={classes.tabs}
      />
    </div>
  );
};

export default ProductDetail;
