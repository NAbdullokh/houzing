import styled from "styled-components";
import { ReactComponent as download } from "../../../../../assets/icons/download.svg";

const Container = styled.div`
  width: 100%;
  padding-bottom: 30px;
  border-bottom: 1px solid #e6e9ec;
`;

const InfoPage = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-top: 24px;
`;

InfoPage.Description = styled.div`
  margin-top: 30px;
  margin-bottom: 25px;
`;

InfoPage.DescriptionTitle = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #0d263b;
`;

InfoPage.DescriptionName = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
`;

InfoPage.ShowMore = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-decoration-line: underline;
  color: #0061df;
  cursor: pointer;
  margin-top: 5px;
`;

InfoPage.Document = styled.div`
  margin-top: 48px;
`;

InfoPage.DocumentName = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #0d263b;
`;

InfoPage.DocumentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

InfoPage.DocumentFile = styled.div`
  display: flex;
`;

InfoPage.DocumentTitle = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  margin: 0 15px;
`;

InfoPage.DocumentDownload = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.01em;
  text-decoration-line: underline;
  text-transform: uppercase;
  color: #0061df;
  cursor: pointer;
`;

const Icon = styled.div``;

Icon.Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 45px;
`;

Icon.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  margin-right: 10px;
`;

Icon.Download = styled(download)``;

export { Container, InfoPage, Icon };
