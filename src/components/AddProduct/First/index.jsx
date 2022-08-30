import React from "react";
import { Container, InputWrapper, Wrapper } from "./style";
import { Input } from "../../Generic/Input";

const First = () => {
  return (
    <Wrapper>
      <Container>
        <p className="title">Contact information</p>
        <InputWrapper>
          <Input type="text" placeholder="Property title*" />
          <Input type="text" placeholder="Type" />
        </InputWrapper>
        <Input type="text" placeholder="Property Description*" mt="40" />
      </Container>
      {/*  */}
      <Container>
        <p className="title">Additional</p>
        <InputWrapper>
          <Input type="text" placeholder="Property title*" />
          <Input type="text" placeholder="Property title*" />
          <Input type="text" placeholder="Property title*" />
        </InputWrapper>

        <InputWrapper>
          <Input type="text" placeholder="Property title*" />
          <Input type="text" placeholder="Property title*" />
          <Input type="text" placeholder="Property title*" />
        </InputWrapper>

        <InputWrapper>
          <Input type="text" placeholder="Property title*" />
          <Input type="text" placeholder="Property title*" />
          <Input type="text" placeholder="Property title*" />
        </InputWrapper>
        <Input type="text" />
      </Container>
      {/*  */}
      <Container>
        <p className="title">Price</p>
        <InputWrapper>
          <Input type="text" placeholder="Price ($)" />
          <Input type="text" placeholder="Price Prefix" />
        </InputWrapper>

        <InputWrapper>
          <Input type="text" placeholder="Price Suffix" />
          <Input type="text" placeholder="Price Custom" />
        </InputWrapper>
      </Container>
    </Wrapper>
  );
};

export default First;
