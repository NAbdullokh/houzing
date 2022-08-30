import React from "react";
import choose from "../../mock/choose";
import { Card, CardWrapper, Container, Wrapper } from "./style";

export const Choose = () => {
  return (
    <Wrapper>
      <Container>
        <Container.Title>Why Choose Us?</Container.Title>
        <Container.Description>
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </Container.Description>
        <CardWrapper>
          {choose.map((item) => {
            return (
              <Card key={item.id}>
                <Card.Img src={item.img} />
                <Card.Title>{item.title}</Card.Title>
                <Card.Description>{item.desc}</Card.Description>
              </Card>
            );
          })}
        </CardWrapper>
      </Container>
    </Wrapper>
  );
};

export default Choose;
