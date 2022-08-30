import React from "react";
import { Carousel } from "antd";
import { useRef } from "react";
import { CarouselWrapper, Icon, Img } from "./style";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";

export const Slider = () => {
  const slider = useRef();

  return (
    <CarouselWrapper>
      <Icon.Left onClick={() => slider.current?.prev()} />
      <Icon.Right onClick={() => slider.current?.next()} />
      <Carousel ref={slider} dots autoplay>
        <Img src={img1} alt="img" />
        <Img src={img2} alt="img" />
        <Img src={img1} alt="img" />
        <Img src={img2} alt="img" />
        <Img src={img1} alt="img" />
      </Carousel>
    </CarouselWrapper>
  );
};
export default Slider;
