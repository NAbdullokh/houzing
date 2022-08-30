import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  padding: 0 30px 0 30px;
  width: 580px;
  height: 390px;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  box-sizing: border-box;
`;

Container.Title = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #0d263b;
  margin-top: 24px;
  margin-bottom: 30px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

InputWrapper.Input = styled.input`
  outline: none;
  border: none;
  border-bottom: 2px;
  width: 520px;
  border-bottom: 2px solid gray;
  padding-bottom: 5px;
  padding-left: 0px;
  :focus {
    border-bottom: 2px solid #0061df;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
`;

Footer.Rem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 32px;
  div {
    display: flex;
    align-items: center;
  }
  input {
    margin-right: 11px;
  }
`;

Footer.Forgot = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-decoration-line: underline;
  color: #0061df;
`;

Footer.Btn = styled.button`
  width: 520px;
  height: 44px;
  border: none;
  outline: none;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  background: #0061df;
  border-radius: 2px;
`;
