import { CarouselProvider, Slider } from "pure-react-carousel";
import React from "react";
import "pure-react-carousel/dist/react-carousel.es.css";

import classes from "./slider.module.scss";
import ItemSlide from "./slider-item";

const ImageSlider = props => {
  return (
    <CarouselProvider
      className={classes.carousel}
      naturalSlideWidth={100}
      naturalSlideHeight={100}
      totalSlides={props.Images.length + 1}
      visibleSlides={3}
      isPlaying={true}
    >
      <Slider dir="ltr" className="text-[10px] md:text-[13px]">
        {props.Images.map((item, index) => (
          <ItemSlide
            onClick={props.onClick}
            key={item.id}
            index={index}
            imgWidth={60}
            imgHeight={60}
            className={classes.slideItem}
            imgUrl={item.sourceUrl}
          />
        ))}
      </Slider>
    </CarouselProvider>
  );
};

export default ImageSlider;
