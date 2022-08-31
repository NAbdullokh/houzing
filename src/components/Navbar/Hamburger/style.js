import styled from "styled-components";

// RightNav
export const Ul = styled.ul`
  ul {
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
  }
  li {
    list-style-type: none;
  }
  @media (max-width: 735px) {
    flex-flow: column nowrap;
    background-color: #ffffff;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(-0)" : "translateX(-120%)")};
    z-index: 999;
    top: 4rem;
    left: 0;
    height: 100%;
    width: 100%;
    padding-top: 2rem;
    transition: transform 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    li {
      padding: 10px 28px;
      justify-content: space-around;
      align-items: center;
      text-align: start;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: #191919;
    }
  }
`;

export const Navbar = styled.div`
  display: none;
  @media (max-width: 735px) {
    display: flex;
  }
`;
export const Wrap = styled.div`
  @media (max-width: 735px) {
    align-items: center;
    border-bottom: 1px solid #f0f0f0;
  }
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 19px;
  text-transform: uppercase;
  margin-bottom: 24px;
  color: #0d263b;
  ::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: blue;
    transition: width 0.3s;
  }

  :hover::after {
    width: 30%;
  }
`;

// Burger
export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      background-color: white;
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      background-color: white;
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      background-color: white;
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export const SocialWrap = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 128px;
`;
export const EachIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 3px;
  background-color: black;
  :hover {
    /* background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3); */
    transform: scale(1.03);
  }
`;

EachIcon.Icons = styled.img``;
