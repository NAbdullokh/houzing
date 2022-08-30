import React, { useEffect, useState } from "react";
import Card from "../Card";
import Filter from "../Filter";
import Button from "../Generic/Button";
import { Body, Container, Wrapper } from "./style";

const Properties = () => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  console.log(data.data, "data");

  useEffect(() => {
    fetch("https://houzing-app.herokuapp.com/api/v1/houses/list")
      .then((res) => res.json())
      .then((res) => setData(res));
    setLoading(false);
  }, []);
  if (loading) {
    return <h1>Loading ...</h1>;
  }
  return (
    <Container>
      <Filter />
      <Wrapper>
        <Wrapper.Title>Properties</Wrapper.Title>
        <div className="description center">
          You have been dreaming of and looking for the cosy and affordable
          homes.
        </div>
      </Wrapper>
      <Body>
        {data?.data?.map((value) => {
          return <Card key={value.id} data={value} />;
        })}
      </Body>
      <Button width="238px" type="primary" mt="20" mb="20">
        Show more
      </Button>
    </Container>
  );
};

export default Properties;
