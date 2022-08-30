import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Images from "./Images";
import { Container, Wrapper } from "./style";
import Info from "./Info";
import Map from "./Map";
import PropertyDetailes from "./PropertiesDet";

const Details = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://houzing-app.herokuapp.com/api/v1/houses/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setData(res?.data?.data);
      });
  }, []);

  console.log(data.name, "bu data");

  return (
    <Wrapper>
      <Container>
        <Images data={data} />
        <Info data={data} />
        <Map data={data} />
        <PropertyDetailes data={data} />
      </Container>
    </Wrapper>
  );
};

export default Details;
