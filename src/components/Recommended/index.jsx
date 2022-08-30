import React, { useRef } from "react";
import Card from "../Card";
import {
  ArrowLeft,
  ArrowRight,
  Cards,
  Carousel,
  Container,
  Wrapper,
} from "./style";
import "react-alice-carousel/lib/alice-carousel.css";
export const Recommended = () => {
  const slider = useRef();

  const responsive = {
    450: { items: 1 },
    768: { items: 2 },
    1024: { items: 4 },
  };

  const items = [
    <Card margin />,
    <Card margin />,
    <Card margin />,
    <Card margin />,
    <Card margin />,
    <Card margin />,
  ];
  return (
    <Container>
      <Container.Title>Recommended</Container.Title>
      <Container.Description>
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </Container.Description>
      <Wrapper>
        <Cards>
          <Carousel
            arrows={false}
            ref={slider}
            autoWidth
            mouseTracking
            responsive={responsive}
            items={items}
          />

          <ArrowRight onClick={() => slider.current?.slidePrev()}></ArrowRight>
          <ArrowLeft onClick={() => slider.current?.slideNext()}></ArrowLeft>
        </Cards>
      </Wrapper>
    </Container>
  );
};

export default Recommended;
