import styled from "styled-components";
import { ReactComponent as logoIcon } from "../../assets/icons/logo.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primaryColor);
`;
const NavbarWrapper = styled.div`
  padding: 0 130px;
  display: flex;
  align-items: center;
  height: 64px;
  max-width: var(--width);
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  color: #ffffff;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
Logo.Icon = styled(logoIcon)``;
Logo.Title = styled("div")`
  margin-left: 11px;
  font-size: 20px;
  font-weight: 500;
`;
const NavbarBody = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  color: white;
  .link {
    color: white;
    text-decoration: none;
    margin: 0 32px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
  }
`;

const activeStyle = ({ isActive }) => {
  return {
    color: isActive ? "#00fff5" : "white",
    textDecoration: "none",
    margin: "0 32px",
    FontStyle: "normal",
    FontWeight: 400,
    fontSize: "18px",
    lineHeight: "24px",
  };
};

export { Wrapper, NavbarWrapper, NavbarBody, Container, Logo, activeStyle };
