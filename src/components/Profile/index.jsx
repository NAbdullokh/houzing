import React, { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import { Container, Wrapper } from "./style";

const Profile = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://houzing-app.herokuapp.com/api/v1/houses/me", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => res.json().then((res) => setData(res.data)));
  }, []);
  console.log(data);
  return (
    <Wrapper>
      <Container>
        <h3>
          You don't have properties ,add them in
          <span onClick={() => navigate("/addProduct")}> Add Product</span>
        </h3>
      </Container>
    </Wrapper>
  );
};

export default Profile;
