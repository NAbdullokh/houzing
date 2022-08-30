import React from "react";
import First from "./First";
import { Container, Wrapper } from "./style";

const AddProduct = () => {
  return (
    <Wrapper>
      <Container>
        <p className="title">Add new property</p>
        <First />
      </Container>
    </Wrapper>
  );
};

export default AddProduct;
