import React from "react";
import { Container, InputWrapper, Wrapper } from "./style";
import { Input } from "../../Generic/Input";
import { Button } from "../../Generic/Button";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const First = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      type: "",
      description: "",
      categoryId: "",
      property: "",
      status: true,
      label: "",
      material: "",
      address: "",
      region: "",
      // rooms: 0,
      // beds: 0,
      // bath: 0,
      // garage: 0,
      // yearBuilt: 0,
      // sqft: 0,
      // dimensions: 0,
      // area: 0,
      // price: 0,
      // prefixPrice: 0,
      // suffixPrice: 0,
      // customPrice: 0,
      // latidude: 0,
      // logtitude: 0,
    },
  });

  const navigate = useNavigate("");

  const getSave = async () => {
    // await axios.post("https://houzing-app.herokuapp.com/api/v1/houses", {
    //   headers: {
    //     Authorization: `Bearer ${localStorage.getItem("token")}`,
    //   },
    //   body: JSON.stringify({
    //     name: formik.values.name,
    //     // type: formik.values.type,
    //     description: formik.values.description,
    //     categoryId: formik.values.categoryId,
    //     // property: formik.values.property,
    //     status: formik.values.status,
    //     // label: formik.values.label,
    //     // material: formik.values.material,
    //     address: formik.values.address,
    //     region: formik.values.region,
    //     room: Number(formik.values.room),
    //     beds: Number(formik.values.beds),
    //     bath: Number(formik.values.bath),
    //     garage: Number(formik.values.garage),
    //     yearBuilt: Number(formik.values.yearBuilt),
    //     // Number(      // sqft: formik.values.sqft,)
    //     area: Number(formik.values.area),
    //     price: Number(formik.values.price),
    //     latidude: formik.values.latidude,
    //     logtitude: formik.values.logtitude,
    //   }),
    // });
    fetch("https://houzing-app.herokuapp.com/api/v1/houses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: formik.values.name,
        // type: formik.values.type,
        description: formik.values.description,
        categoryId: formik.values.categoryId,
        // property: formik.values.property,
        status: formik.values.status,
        // label: formik.values.label,
        // material: formik.values.material,
        address: formik.values.address,
        region: formik.values.region,
        room: Number(formik.values.room),
        beds: Number(formik.values.beds),
        bath: Number(formik.values.bath),
        garage: Number(formik.values.garage),
        yearBuilt: Number(formik.values.yearBuilt),
        // Number(      // sqft: formik.values.sqft,)
        area: Number(formik.values.area),
        price: Number(formik.values.price),
        latidude: formik.values.latidude,
        logtitude: formik.values.logtitude,
      }),
    }).then((res) => res.json());
  };
  // navigate("/home");
  console.log(formik);
  return (
    <Wrapper>
      <Container>
        <p className="title">Contact information</p>
        <InputWrapper>
          <Input
            type="text"
            placeholder="Property title*"
            value={formik.values.name}
            onChange={formik.handleChange}
            name="name"
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
          <Input
            type="text"
            placeholder="Property ID"
            value={formik.values.categoryId}
            onChange={formik.handleChange}
            name="categoryId"
          />
          <Input
            type="text"
            placeholder="Parent property"
            value={formik.values.property}
            onChange={formik.handleChange}
            name="property"
          />
          <Input
            type="text"
            placeholder="Status"
            value={formik.values.status}
            onChange={formik.handleChange}
            name="status"
          />
        </InputWrapper>

        <InputWrapper>
          <Input
            type="text"
            placeholder="Label"
            value={formik.values.label}
            onChange={formik.handleChange}
            name="label"
          />
          <Input
            type="text"
            placeholder="Material"
            value={formik.values.material}
            onChange={formik.handleChange}
            name="material"
          />
          <Input
            type="text"
            placeholder="Rooms"
            value={formik.values.room}
            onChange={formik.handleChange}
            name="room"
          />
        </InputWrapper>

        <InputWrapper>
          <Input
            type="text"
            placeholder="Beds"
            value={formik.values.beds}
            onChange={formik.handleChange}
            name="beds"
          />
          <Input
            type="text"
            placeholder="Baths"
            value={formik.values.bath}
            onChange={formik.handleChange}
            name="bath"
          />
          <Input
            type="text"
            placeholder="Garages"
            value={formik.values.garage}
            onChange={formik.handleChange}
            name="garage"
          />
        </InputWrapper>

        <InputWrapper>
          <Input
            type="text"
            placeholder="Year bulid"
            value={formik.values.yearBuilt}
            onChange={formik.handleChange}
            name="yearBuilt"
          />
          <Input
            type="text"
            placeholder="Home area (sqft)"
            value={formik.values.sqft}
            onChange={formik.handleChange}
            name="sqft"
          />
          <Input
            type="text"
            placeholder="Lot dimensions"
            value={formik.values.dimensions}
            onChange={formik.handleChange}
            name="dimensions"
          />
        </InputWrapper>
        <Input
          type="text"
          placeholder="Lot area (sqft)"
          value={formik.values.area}
          onChange={formik.handleChange}
          name="area"
        />
      </Container>
      {/*  */}
      <Container>
        <p className="title">Price</p>
        <InputWrapper>
          <Input
            type="text"
            placeholder="Price ($)"
            value={formik.values.price}
            onChange={formik.handleChange}
            name="price"
          />
          <Input
            type="text"
            placeholder="Price Prefix"
            value={formik.values.prefixPrice}
            onChange={formik.handleChange}
            name="prefixPrice"
          />
        </InputWrapper>

        <InputWrapper>
          <Input
            type="text"
            placeholder="Price Suffix"
            value={formik.values.suffixPrice}
            onChange={formik.handleChange}
            name="suffixPrice"
          />
          <Input
            type="text"
            placeholder="Price Custom"
            value={formik.values.customPrice}
            onChange={formik.handleChange}
            name="customPrice"
          />
        </InputWrapper>
      </Container>
      {/*  */}
      <Container>
        <p className="title">Location</p>
        <InputWrapper>
          <Input
            type="text"
            placeholder="Regions"
            value={formik.values.region}
            onChange={formik.handleChange}
            name="region"
          />
          <Input
            type="text"
            placeholder="Address"
            value={formik.values.address}
            onChange={formik.handleChange}
            name="address"
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="text"
            placeholder="Latidude"
            value={formik.values.latidude}
            onChange={formik.handleChange}
            name="latidude"
          />
          <Input
            type="text"
            placeholder="Logtitude"
            value={formik.values.logtitude}
            onChange={formik.handleChange}
            name="logtitude"
          />
        </InputWrapper>
      </Container>
      <Button
        onClick={getSave}
        type="primary"
        width="280px"
        ml="auto"
        mb="50px"
      >
        Submit
      </Button>
    </Wrapper>
  );
};

export default First;
