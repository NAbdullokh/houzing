import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import { ArrowLeft, ArrowRight, Cards, Container, Wrapper } from "./style";
import CategoryCard from "./Card";

export const Category = () => {
  const [state, setState] = useState([]);

  const navigate = useNavigate();

  const onSelect = () => {
    navigate(`/properties`);
  };

  useEffect(() => {
    fetch(`https://houzing-app.herokuapp.com/api/v1/categories/list`).then(
      (res) =>
        res.json().then((res) => {
          let list = res?.data?.map((value) => {
            return <CategoryCard onClick={onSelect} title={value?.name} />;
          });
          setState(list);
        })
    );
  }, []);

  const slider = useRef();

  return (
    <Container>
      <Container.Title>Category</Container.Title>
      <Container.Description>
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </Container.Description>
      <Wrapper>
        <Cards>
          <AliceCarousel
            arrows={false}
            ref={slider}
            autoWidth
            mouseTracking
            items={state}
          />
          <ArrowRight onClick={() => slider.current?.slidePrev()}></ArrowRight>
          <ArrowLeft onClick={() => slider.current?.slideNext()}></ArrowLeft>
        </Cards>
      </Wrapper>
    </Container>
  );
};

export default Category;
