import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 40px;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  width: 100%;
  /* background-color: var(--primaryColor); */
  background: #f5f7fc;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: var(--width);
  width: 100%;
  height: 482px;
  padding: 0 130px;
  margin: auto;
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
  text-align: center;
  color: #696969;
`;

export const CardWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 30px;
`;

export const CardInfo = styled.div`
  padding: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 380px;
  height: 197px;
  background: #ffffff;
  box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
  border-radius: 3px;
  flex-direction: column;
  position: relative;
`;

export const UserInfo = styled.div`
  position: absolute;
  bottom: -65px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

UserInfo.Img = styled.img``;

UserInfo.Name = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #0d263b;
`;

UserInfo.Job = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #696969;
`;
