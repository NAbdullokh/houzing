import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 34px;
`;

export const Container = styled.div`
  max-width: var(--width);
  width: 100%;
  margin: auto;
  padding: 0 130px;
  @media (max-width: 1000px) {
    padding: 0 25px;
  }
`;
