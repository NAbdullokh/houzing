import React from "react";
import { Comment } from "../../mock/comments";
import { CardInfo, CardWrap, Container, UserInfo, Wrapper } from "./style";

const Comments = () => {
  return (
    <Wrapper>
      <Container>
        <Container.Title>Testimonials</Container.Title>
        <Container.Description>
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </Container.Description>
        <CardWrap>
          {Comment.map((value) => {
            return (
              <CardInfo>
                <p className="description">{value.title}</p>
                <UserInfo>
                  <UserInfo.Img src={value.userImg} />
                  <UserInfo.Name>{value.name}</UserInfo.Name>
                  <UserInfo.Job>{value.job}</UserInfo.Job>
                </UserInfo>
              </CardInfo>
            );
          })}
        </CardWrap>
      </Container>
    </Wrapper>
  );
};

export default Comments;
