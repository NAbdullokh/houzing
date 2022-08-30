import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr 2fr;
  width: 100%;
  height: 400px;
  grid-gap: 10px;
  margin-top: 24px;
`;

const Wrapper = styled.div``;

Wrapper.H1 = styled.div`
  grid-column: 1/3;
  grid-row: 1/4;
  background-color: red;
`;

Wrapper.H2 = styled.div`
  grid-column: 3/5;
  grid-row: 1/2;
  height: 170px;
`;

Wrapper.H3 = styled.div`
  grid-column: 5/6;
  grid-row: 1/2;
`;

Wrapper.H4 = styled.div`
  grid-column: 3/5;
  grid-row: 3/4;
  height: 200px;
`;

Wrapper.H5 = styled.div`
  grid-column: 5/6;
  grid-row: 3/4;
  position: relative;
`;

Wrapper.Number = styled.div`
  position: absolute;
  top: 35%;
  left: 35%;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  letter-spacing: -0.02em;
  color: #ffffff;
`;

const MainImg = styled.img`
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export { Container, Wrapper, Image, MainImg };
