import React from "react";
import ContactHouse from "./HouseInfo/Contact";
import HouseInfo from "./HouseInfo/InfoHouse";
import ShowMore from "./HouseInfo/ShowMore";
import { Container, Elements } from "./style";

const Info = ({ data }) => {
  return (
    <Container>
      <Elements>
        <HouseInfo data={data} />
        <ShowMore data={data} />
      </Elements>
      <ContactHouse data={data} />
    </Container>
  );
};

export default Info;
