import Image from "next/image";
import { Slide } from "pure-react-carousel";
import imageLoader from "../../lib/image-loader";
const ItemSlide = props => {
  const imageOnClickHandlr = () => {
    props.onClick(props.imgUrl);
  };

  return (
    <Slide index={props.index} className={props.className}>
      <Image
        loader={imageLoader}
        onClick={imageOnClickHandlr}
        alt=""
        src={props.imgUrl}
        layout="responsive"
        width={props.imgWidth}
        height={props.imgHeight}
      />
    </Slide>
  );
};

export default ItemSlide;
