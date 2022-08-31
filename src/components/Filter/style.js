import styled from "styled-components";
import { ReactComponent as home } from "../../assets/icons/home-icon.svg";
import { ReactComponent as setting } from "../../assets/icons/setting-lines.svg";
import { ReactComponent as search } from "../../assets/icons/search-icon.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (max-width: 650px) {
    padding: 0 25px;
  }
`;

const Container = styled.div`
  display: flex;
  max-width: var(--width);
  width: 100%;
  padding: 0 130px;
  margin: 10px auto;
  gap: 20px;
  @media (max-width: 1000px) {
    padding: 0 25px;
  }
  @media (max-width: 650px) {
    flex-direction: column;
    position: absolute;
    top: 40%;
    z-index: 888;
    background: #ffffff;
    border-radius: 3px;
    padding: 25px;
    width: 91.5%;
  }
`;

const Icon = styled.div`
  margin-right: 8px;
`;
Icon.Home = styled(home)`
  margin-right: 8px;
  margin-top: 6px;
`;
Icon.Setting = styled(setting)`
  margin-right: 8px;
`;
Icon.Search = styled(search)`
  margin-right: 8px;
`;

const Advanced = styled.div`
  width: fit-content;
  height: fit-content;
  background: #ffffff;
  border-radius: 5px;
  padding: 10px;
`;
Advanced.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0d263b;
`;
const Section = styled.div`
  display: flex;
  margin-bottom: 15px;
  justify-content: flex-end;
  gap: 0 20px;
`;

const BoxWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export { Wrapper, Container, Icon, Advanced, Section, BoxWrap };
