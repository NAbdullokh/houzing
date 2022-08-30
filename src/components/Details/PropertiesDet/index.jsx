import React from "react";
import { Container, Title, Wrapper } from "./style";

export const PropertyDetailes = ({ data }) => {
  return (
    <Container>
      <Wrapper>
        <Title>Property Details</Title>
        <Title.Id>
          <Title.Details>Property ID:</Title.Details>
          <Title.Name>{data?.data?.id}</Title.Name>
        </Title.Id>
        <Title.Bed>
          <Title.Details>Bedrooms:</Title.Details>
          <Title.Name>{data?.data?.houseDetails?.beds || 0}</Title.Name>
        </Title.Bed>
        <Title.Property>
          <Title.Details>Property Type:</Title.Details>
          <Title.Name>{data?.data?.category?.name}</Title.Name>
        </Title.Property>
        <Title.Id>
          <Title.Details>Price:</Title.Details>
          <Title.Name>${data?.data?.price || 0}</Title.Name>
        </Title.Id>
        <Title.Bed>
          <Title.Details>Bathrooms:</Title.Details>
          <Title.Name>{data?.data?.houseDetails?.bath || 0}</Title.Name>
        </Title.Bed>
        <Title.Property>
          <Title.Details>Property Status:</Title.Details>
          <Title.Name>For Sale</Title.Name>
        </Title.Property>
        <Title.Id>
          <Title.Details>Property Size:</Title.Details>
          <Title.Name>{data?.data?.houseDetails?.area || 0} SQ FT</Title.Name>
        </Title.Id>
        <Title.Bed>
          <Title.Details>Garage:</Title.Details>
          <Title.Name>{data?.data?.houseDetails?.garage || 0}</Title.Name>
        </Title.Bed>
        <Title.Id>
          <Title.Details>Year Bulit:</Title.Details>
          <Title.Name>{data?.data?.houseDetails?.yearBuilt || 0}</Title.Name>
        </Title.Id>
        <Title.Bed>
          <Title.Details>Garage size:</Title.Details>
          <Title.Name>0</Title.Name>
        </Title.Bed>
      </Wrapper>
    </Container>
  );
};
export default PropertyDetailes;
