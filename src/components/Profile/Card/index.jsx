import React from "react";
import { Container } from "./style";

const Card = ({ data }) => {
  return <Container>{data[0].name}</Container>;
};

export default Card;
