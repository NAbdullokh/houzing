import React from "react";
import Button from "../Generic/Button";
import { Container } from "./style";

const ReadMore = () => {
  return (
    <Container>
      <Container.Title>
        Vermont Farmhouse With Antique Jail Is the Week's Most Popular Home
      </Container.Title>
      <Button width={"180px"} type={"primary"}>
        Read more
      </Button>
    </Container>
  );
};

export default ReadMore;
