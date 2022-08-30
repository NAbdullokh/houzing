import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/left-arrow.svg";
import { ReactComponent as rarrow } from "../../assets/icons/right-arrow.svg";

const CarouselWrapper = styled("div")`
  position: relative;
  margin-bottom: 96px;
`;

const Img = styled.img`
  width: 100%;
`;

const Icon = styled.div``;

Icon.Left = styled(arrow)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 0px;
  transform: translate(100%, -50%);
  width: 45px;
  height: 45px;
  padding: 12px;
  color: black;
  background: white;
  opacity: 0.5;
  border-radius: 50%;
  cursor: pointer;
  z-index: 999;
  :hover {
    opacity: 0.97;
  }
  & path {
    fill: #0d263b;
  }
`;

Icon.Right = styled(rarrow)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  right: 0;
  transform: translate(-100%, -40%);
  width: 45px;
  height: 45px;
  padding: 12px;
  color: black;
  background: white;
  opacity: 0.5;
  border-radius: 50%;
  cursor: pointer;
  z-index: 999;
  :hover {
    opacity: 0.97;
  }
  & path {
    fill: #0d263b;
  }
`;

export { CarouselWrapper, Img, Icon };
