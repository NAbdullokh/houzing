import styled from "styled-components";
import img from "../../assets/images/img2.jpg";

export const Container = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 570px;
  background-image: url(${img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

Container.Title = styled.p`
  width: 567px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-bottom: 40px;
  @media (max-width: 650px) {
    font-size: 20px;
  }
  @media (max-width: 555px) {
    font-size: 15px;
    width: 300px;
  }
`;
