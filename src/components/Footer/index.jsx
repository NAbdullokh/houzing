import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import location2 from "../../assets/icons/location2.svg";
import phone from "../../assets/icons/phone.svg";
import email from "../../assets/icons/email.svg";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import instagram from "../../assets/icons/instagram.svg";
import linkedIn from "../../assets/icons/linkedIn.svg";
import {
  About,
  ContactUs,
  Container,
  EachIcon,
  FooterAbout,
  Logo,
  SocialWrap,
  TitleIconWrap,
  Wrapper,
} from "./style";
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  const navigate = useNavigate();

  const style = {
    background: "#0061DF",
    width: "45px",
    height: "45px",
    borderRadius: "3px",
    display: "flex",
    alignItems: "center",
    justifyContent: "Center",
  };

  return (
    <>
      <Outlet />
      <Wrapper>
        <Container>
          <About>
            <ContactUs>
              <p className="footerTitle">Contact US</p>
              <TitleIconWrap>
                <TitleIconWrap.Icons src={location2} alt="" />
                <p className="footerText">
                  329 Queensberry Street, North Melbourne VIC 3051, Australia.
                </p>
              </TitleIconWrap>

              <TitleIconWrap>
                <TitleIconWrap.Icons src={phone} alt="" />
                <p className="footerText">123 456 7890</p>
              </TitleIconWrap>

              <TitleIconWrap>
                <TitleIconWrap.Icons src={email} alt="" />
                <p className="footerText">support@houzing.com</p>
              </TitleIconWrap>
              <SocialWrap>
                <EachIcon>
                  <EachIcon.Icons src={facebook} alt={facebook} />
                </EachIcon>

                <EachIcon>
                  <EachIcon.Icons src={twitter} alt={twitter} />
                </EachIcon>

                <EachIcon>
                  <EachIcon.Icons src={instagram} alt={instagram} />
                </EachIcon>

                <EachIcon>
                  <EachIcon.Icons src={linkedIn} alt={linkedIn} />
                </EachIcon>
              </SocialWrap>
            </ContactUs>

            <ContactUs>
              <p className="footerTitle">Discover</p>
              <p className="footerText">Chicago</p>
              <p className="footerText">Los Angeles</p>
              <p className="footerText">Miami</p>
              <p className="footerText">New York</p>
            </ContactUs>

            <ContactUs>
              <p className="footerTitle">Lists by Category </p>
              <p className="footerText">Apartments</p>
              <p className="footerText">Condos</p>
              <p className="footerText">Houses</p>
              <p className="footerText">Offices</p>
              <p className="footerText">Retail</p>
              <p className="footerText">Villas</p>
            </ContactUs>

            <ContactUs>
              <p className="footerTitle">Lists by Category </p>
              <p className="footerText">About Us</p>
              <p className="footerText">Terms & Conditions</p>
              <p className="footerText">Support Center</p>
              <p className="footerText">Contact Us</p>
            </ContactUs>
          </About>
          <FooterAbout>
            <Logo onClick={() => navigate("/home")}>
              <Logo.Icon />
              <Logo.Title>Houzing</Logo.Title>
            </Logo>
            <p className="description">
              Copyright © 2021 CreativeLayers. All Right Reserved.
            </p>
            <ScrollToTop style={style} smooth color={"white"} />
          </FooterAbout>
        </Container>
      </Wrapper>
    </>
  );
};

export default Footer;
