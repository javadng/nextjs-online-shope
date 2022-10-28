import Image from "next/image";
import { Slide } from "pure-react-carousel";
const ItemSlide = props => {
  const imageOnClickHandlr = () => {
    props.onClick(props.imgUrl);
  };
  return (
    <Slide index={props.index} className={props.className}>
      <Image
        onClick={imageOnClickHandlr}
        src={props.imgUrl}
        layout="responsive"
        width={props.imgWidth}
        height={props.imgHeight}
      />
    </Slide>
  );
};

export default ItemSlide;
