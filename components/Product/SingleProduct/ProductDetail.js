import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import { uiActions } from "../../../store/ui-slice";
import ImageSlider from "../../carousel/image-slider";
import Button from "../../UI/Button";
import InputChangeNumber from "../../UI/InputChangeNumber";
import parse from "html-react-parser";
import classes from "./ProductDetail.module.scss";
import SingleTabs from "./SingleTabs";
import imageLoader from "../../../lib/image-loader";

const ProductDetail = props => {
  const containerClasses = `${props.className} ${classes.product__container}`;
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, []);

  const {
    id,
    AdditionalInfo,
    image,
    description,
    name,
    title,
    price,
    reviews,
    galleryImages,
    viewsInfo,
    quantity,
  } = props.productDetail;

  const subImgsUrl = galleryImages.nodes;

  const descriptionElem = parse(description);

  const [imgUrlState, setImgUrlState] = useState(image.sourceUrl);

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
              loader={imageLoader}
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
        {/* <div className={classes.views}>
          <span>{viewsInfo.commentsNumber} Comments</span> |
          <span>{viewsInfo.viewsNumber} Views</span>
        </div> */}
        <div className={classes.productdesc}>
          <span className={classes.price}>${price} ~ $300</span>
          <div className={classes.desc}>{descriptionElem}</div>
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
      {/* <SingleTabs
        reviews={reviews}
        AdditionalInformation={AdditionalInfo}
        desc={description}
        className={classes.tabs}
      /> */}
    </div>
  );
};

export default ProductDetail;
