import React, { useRef } from "react";
import { Container, Icon, Advanced, Section, Wrapper, BoxWrap } from "./style";
import { Input } from "../Generic/Input";
import { Button } from "../Generic/Button";
import { Popover } from "antd";

export const Filter = () => {
  const countryRef = useRef();
  console.log(countryRef);
  const search = (
    <Advanced>
      <Advanced.Title>Address</Advanced.Title>
      <Section>
        <Input name="country" placeholder="Country" ref={countryRef} />
        <Input name="region" placeholder="Region" />
        <Input name="city" placeholder="City" />
        <Input name="zip_code" placeholder="Zip Code" />
      </Section>
      <Advanced.Title>Apartment Info</Advanced.Title>
      <Section>
        <Input name="adress" placeholder="Adress" />
        <Input name="house_name" placeholder="House Name" />
        <Input name="rooms" placeholder="Rooms" />
      </Section>
      <Advanced.Title>Price</Advanced.Title>
      <Section>
        <Input name="min_price" placeholder="Min Price" />
        <Input name="max_price" placeholder="Max Price" />
      </Section>
      <Section>
        <Button width={"131px"} ml={20} type="primary">
          Search
        </Button>
      </Section>
    </Advanced>
  );

  return (
    <Wrapper>
      <Container>
        <Input
          pl={"50px"}
          width={"150%"}
          placeholder={"Enter an address, neighborhood, city, or ZIP code"}
        >
          <Icon.Home />
        </Input>

        <BoxWrap>
          <Popover placement="bottomRight" content={search} trigger="click">
            <Button width={"131px"} type={"secondary"}>
              <Icon.Setting /> Advanced
            </Button>
          </Popover>
          <Button width={"180px"} type={"primary"}>
            <Icon.Search /> Search
          </Button>
        </BoxWrap>
      </Container>
    </Wrapper>
  );
};

export default Filter;
