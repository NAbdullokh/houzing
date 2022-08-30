import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 24px;
  flex-direction: column;
`;

Wrapper.Title = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: var(--primaryColor);
`;

export const Boxes = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

Boxes.Title = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: var(--primaryColor);
  span {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: var(--secondaryColor);
  }
`;
