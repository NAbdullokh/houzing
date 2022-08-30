import React, { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import { Container, Wrapper } from "./style";

const Profile = () => {
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
      <Container>{data.length !== 0 ? <Card data={data} /> : "bye"}</Container>
    </Wrapper>
  );
};

export default Profile;
