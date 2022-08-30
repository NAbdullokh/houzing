import React from "react";
import { Container, Icon, Title } from "./style";
import img from "../../../assets/images/uy-1.png";

const CategoryCard = ({ title, onClick }) => {
  return (
    <Container onClick={onClick} imgUrl={img}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  );
};

export default CategoryCard;
