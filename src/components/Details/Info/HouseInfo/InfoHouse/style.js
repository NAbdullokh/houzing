import styled from "styled-components";
import { ReactComponent as bed } from "../../../../../assets/icons/beds.svg";
import { ReactComponent as bath } from "../../../../../assets/icons/bath.svg";
import { ReactComponent as garage } from "../../../../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../../../../assets/icons/ruler.svg";
import { ReactComponent as calendar } from "../../../../../assets/icons/calendar.svg";

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 24px;
  padding-right: 20px;
`;

export const Box1 = styled.div`
  flex: 3;
  display: flex;
  justify-content: start;
  flex-direction: column;
`;

export const Icons = styled.div`
  display: flex;
  gap: 24px;
  @media (max-width: 1100px) {
    flex-wrap: wrap;
  }
`;

Icons.Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  height: 45px;
`;

Icons.Text = styled.div`
  display: flex;
  white-space: nowrap;
  overflow: hidden;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  margin-left: 5px;
  gap: 8px;
  @media (max-width: 1247px) {
    font-size: 10px;
  }
`;

Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Garage = styled(garage)``;
Icons.Ruler = styled(ruler)``;
Icons.Calendar = styled(calendar)``;

export const Box2 = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Box2Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const EachIcon = styled.div`
  display: flex;
  align-items: center;
`;

export const IconWrappers = styled.div`
  width: 35px;
  height: 35px;
  background-color: #f6f8f9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Box2Price = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Price = styled.div``;
