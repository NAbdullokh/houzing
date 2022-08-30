import styled from "styled-components";

export const Container = styled.div`
  margin-top: 24px;
  width: 360px;
  height: 476px;
  margin-left: 20px;
  padding: 24px;
  border: 1px solid #e6e9ec;
  border-radius: 3px;
`;

export const User = styled.div`
  display: flex;
`;

User.Img = styled.img`
  border-radius: 50%;
  border: 2px solid #ffffff;
  margin-right: 10px;
`;

User.Name = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0d263b;
`;

User.Number = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
`;

export const InputWrap = styled.div`
  margin-top: 24px;
`;

InputWrap.Input = styled.input`
  outline: none;
  border: none;
  width: 100%;
  border-bottom: 1px solid #e6e9ec;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  margin-bottom: 35px;
`;

export const Check = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 24px;
`;

Check.CheckBox = styled.input`
  margin-right: 8px;
`;

export const Btn = styled.input`
  margin-top: 20px;
  width: 100%;
  height: 44px;
  background: #0061df;
  border-radius: 2px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  outline: none;
  :active {
    transform: scale(0.98);
    opacity: 0.7;
  }
`;
