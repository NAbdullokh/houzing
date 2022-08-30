import React from "react";
import Slider from "../Carousel";
import Category from "../Category";
import Choose from "../Choose";
import Comments from "../Comments";
import Filter from "../Filter";
import ReadMore from "../ReadMore";
import Recommended from "../Recommended";
import { Container } from "./style";

export const Home = () => {
  return (
    <Container>
      <Filter />
      <Slider />
      <Recommended />
      <Choose />
      <Category />
      <ReadMore />
      <Comments />
    </Container>
  );
};

export default Home;
