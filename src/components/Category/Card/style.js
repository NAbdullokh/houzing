import styled from "styled-components";
import { ReactComponent as villa } from "../../../assets/icons/villa.svg";

const Container = styled.div`
  width: 280px;
  height: 350px;
  background-image: url(${({ imgUrl }) => imgUrl});
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  :hover {
    box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06),
      0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06);
  }
  cursor: pointer;
  margin-right: 20px;
`;

const Title = styled.div`
  text-align: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #ffffff;
`;

const Icon = styled(villa)``;

export { Container, Icon, Title };
