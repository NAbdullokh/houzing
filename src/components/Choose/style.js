import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #f5f7fc;
  padding: 40px 0;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: var(--width);
  width: 100%;
  padding: 0 130px;
  margin: auto;
  flex-direction: column;
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

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 91px;
  margin-top: 40px;
`;

const Card = styled.div`
  width: 243px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

Card.Img = styled.img`
  width: 45px;
`;

Card.Title = styled.p`
  margin-top: 24px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  color: #0d263b;
`;

Card.Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #696969;
`;

export { Wrapper, Container, CardWrapper, Card };
