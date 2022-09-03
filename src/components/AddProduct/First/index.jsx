import React from "react";
import { Container, InputWrapper, Wrapper } from "./style";
import { Input } from "../../Generic/Input";
import { Button } from "../../Generic/Button";
import { useFormik } from "formik";

const First = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      type: "",
      description: "",
      id: "",
      status: "",
      label: "",
      material: "",
      rooms: 0,
      beds: 0,
      bath: 0,
      garages: 0,
      year: 0,
      sqft: 0,
      dimensions: 0,
      area: 0,
      price: 0,
      prefixPrice: 0,
      suffixPrice: 0,
      customPrice: 0,
      latidude: 0,
      logtitude: 0,
    },
  });
  return (
    <Wrapper>
      <Container>
        <p className="title">Contact information</p>
        <InputWrapper>
          <Input
            type="text"
            placeholder="Property title*"
            value={formik.values.title}
            onChange={formik.handleChange}
            name="title"
          />
          <Input
            type="text"
            placeholder="Type"
            value={formik.values.type}
            onChange={formik.handleChange}
            name="type"
          />
        </InputWrapper>
        <Input
          type="text"
          placeholder="Property Description*"
          mt="40"
          value={formik.values.description}
          onChange={formik.handleChange}
          name="description"
        />
      </Container>
      {/*  */}
      <Container>
        <p className="title">Additional</p>
        <InputWrapper>
          <Input type="text" placeholder="Property ID" />
          <Input type="text" placeholder="Parent property" />
          <Input type="text" placeholder="Status" />
        </InputWrapper>

        <InputWrapper>
          <Input type="text" placeholder="Label" />
          <Input type="text" placeholder="Material" />
          <Input type="text" placeholder="Rooms" />
        </InputWrapper>

        <InputWrapper>
          <Input type="text" placeholder="Beds" />
          <Input type="text" placeholder="Baths" />
          <Input type="text" placeholder="Garages" />
        </InputWrapper>

        <InputWrapper>
          <Input type="text" placeholder="Year bulid" />
          <Input type="text" placeholder="Home area (sqft)" />
          <Input type="text" placeholder="Lot dimensions" />
        </InputWrapper>
        <Input type="text" placeholder="Lot area (sqft)" />
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
      {/*  */}
      <Container>
        <p className="title">Location</p>
        <InputWrapper>
          <Input type="text" placeholder="Price ($)" />
          <Input type="text" placeholder="Price Prefix" />
        </InputWrapper>
      </Container>
      <Button type="primary" width="280px" ml="auto" mb="50px">
        Submit
      </Button>
    </Wrapper>
  );
};

export default First;
