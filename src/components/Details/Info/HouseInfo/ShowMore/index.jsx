import React from "react";
import { Container, Icon, InfoPage } from "./style";

const ShowMore = ({ data }) => {
  return (
    <Container>
      <InfoPage.Description>
        <InfoPage.DescriptionTitle>Description</InfoPage.DescriptionTitle>
        <InfoPage.DescriptionName>
          {data?.data?.description}
        </InfoPage.DescriptionName>
        <InfoPage.ShowMore>Show more</InfoPage.ShowMore>
      </InfoPage.Description>
      <InfoPage.Document>
        <InfoPage.DocumentName>Documents</InfoPage.DocumentName>
        <InfoPage.DocumentContainer>
          <InfoPage.DocumentFile>
            <Icon.Download />
            <InfoPage.DocumentTitle>test_property.pdf</InfoPage.DocumentTitle>
            <InfoPage.DocumentDownload>download</InfoPage.DocumentDownload>
          </InfoPage.DocumentFile>
          <InfoPage.DocumentFile>
            <Icon.Download />
            <InfoPage.DocumentTitle>test_property.pdf</InfoPage.DocumentTitle>
            <InfoPage.DocumentDownload>download</InfoPage.DocumentDownload>
          </InfoPage.DocumentFile>
          <InfoPage.DocumentFile>
            <Icon.Download />
            <InfoPage.DocumentTitle>test_property.pdf</InfoPage.DocumentTitle>
            <InfoPage.DocumentDownload>download</InfoPage.DocumentDownload>
          </InfoPage.DocumentFile>
        </InfoPage.DocumentContainer>
      </InfoPage.Document>
    </Container>
  );
};

export default ShowMore;
