import styled from "styled-components";
import AliceCarousel from "react-alice-carousel";
import { ReactComponent as arrow } from "../../assets/icons/left-arrow.svg";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
`;

Container.Title = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #0d263b;
`;

Container.Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
`;

const Cards = styled.div`
  display: flex;
  width: 1440px;
  margin-top: 32px;
  padding: 0 130px;
  gap: 20px;
`;

const Carousel = styled(AliceCarousel)``;

const ArrowLeft = styled(arrow)`
  top: 50%;
  right: 20px;
  transform: translate(-50%, -100%) rotate(180deg);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  padding: 12px;
  color: black;
  background-color: white;
  opacity: 0.5;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  :hover {
    opacity: 0.97;
  }
  & path {
    fill: #0d263b;
  }
`;

const ArrowRight = styled(ArrowLeft)`
  left: 50px;
  transform: translate(50%, -100%);
  padding-left: 0;
  padding-right: 10px;
`;

const IconArrow = styled(arrow)`
  width: 7px;
  height: 12px;
`;

export {
  Wrapper,
  Carousel,
  Container,
  Cards,
  ArrowLeft,
  ArrowRight,
  IconArrow,
};
