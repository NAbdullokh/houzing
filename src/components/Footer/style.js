import styled from "styled-components";
import { ReactComponent as logoIcon } from "../../assets/icons/logo.svg";

export const Wrapper = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--primaryColor);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: var(--width);
  width: 100%;
  height: 460px;
  padding: 0 130px;
  margin: auto;
`;

export const About = styled.div`
  flex: 3;
  display: flex;
  justify-content: space-between;
`;

export const ContactUs = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

export const TitleIconWrap = styled.div`
  display: flex;
  align-items: center;
  width: 257px;
`;

TitleIconWrap.Icons = styled.img`
  margin-right: 20px;
`;

export const SocialWrap = styled.div`
  display: flex;
  gap: 30px;
`;
export const EachIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    border-radius: 3px;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
`;

EachIcon.Icons = styled.img``;

export const FooterAbout = styled.div`
  margin-top: 10px;
  border-top: 2px solid rgba(255, 255, 255, 0.15);
  flex: 0.5;
  display: flex;
  align-items: center;
  padding-top: 20px;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
Logo.Icon = styled(logoIcon)``;
Logo.Title = styled("div")`
  margin-left: 11px;
  font-size: 20px;
  font-weight: 500;
  color: white;
`;

FooterAbout.CopyRight = styled.p``;
