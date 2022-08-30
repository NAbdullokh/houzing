import React from "react";
import { Boxes, Wrapper } from "./style";

const Location = ({ data }) => {
  console.log(data);
  return (
    <Wrapper>
      <Wrapper.Title>Location</Wrapper.Title>
      <Boxes>
        <Boxes.Title>
          Address: <span>{data.address}</span>
        </Boxes.Title>

        <Boxes.Title>
          City: <span>{data.city}</span>
        </Boxes.Title>

        <Boxes.Title>
          Area: <span>{data.area || "no area"}</span>
        </Boxes.Title>
      </Boxes>

      <Boxes>
        <Boxes.Title>
          State/County: : <span>{data.country}</span>
        </Boxes.Title>

        <Boxes.Title>
          Zip:: <span>{data.zipCode}</span>
        </Boxes.Title>

        <Boxes.Title>
          Country:: <span>{data.country}</span>
        </Boxes.Title>
      </Boxes>
    </Wrapper>
  );
};

export default Location;
