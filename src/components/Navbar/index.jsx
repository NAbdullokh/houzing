import React from "react";
import {
  activeStyle,
  Container,
  Logo,
  NavbarBody,
  NavbarWrapper,
  Wrapper,
} from "./style";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import { Button } from "../Generic/Button";
import { Popover } from "antd";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const gotoSignIn = () => {
    navigate("/signin");
  };
  const logout = () => {
    localStorage.removeItem("token");
    if (location?.pathname?.includes("profile")) {
      navigate("/home");
    } else {
      navigate(location.pathname);
    }
  };
  const content = (
    <div>
      <p onClick={() => navigate("/profile")}>My Properties</p>
      {/* <p onClick={() => navigate("/myProperties")}> My properties</p> */}
      <p onClick={() => navigate("/favorites")}>Favorites</p>
      <p onClick={logout}>Log Out</p>
    </div>
  );

  var button;

  localStorage.getItem("token")
    ? (button = (
        <Popover placement="bottomRight" content={content} trigger="click">
          <i class="fa-solid fa-user">fswd</i>
        </Popover>
      ))
    : (button = (
        <Button onClick={gotoSignIn} width={"120px"}>
          Log In
        </Button>
      ));

  return (
    <Wrapper>
      <Container>
        <NavbarWrapper>
          <Logo onClick={() => navigate("/home")}>
            <Logo.Icon />
            <Logo.Title>Houzing</Logo.Title>
          </Logo>
          <NavbarBody>
            {navbar.map((value) => {
              return (
                !value.hidden && (
                  <NavLink style={activeStyle} key={value.id} to={value.path}>
                    {value.title}
                  </NavLink>
                )
              );
            })}
          </NavbarBody>
          {button}
        </NavbarWrapper>
      </Container>
      <Outlet />
    </Wrapper>
  );
};
export default Navbar;
