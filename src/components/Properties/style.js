import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px 0;
`;

Wrapper.Title = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #0d263b;
`;

const Body = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  grid-gap: 1rem;
  align-items: start;
  max-width: var(--width);
  padding: 0 130px;
  @media (max-width: 1000px) {
    padding: 0 25px;
  }
`;

export { Container, Wrapper, Body };
