import React from "react";
import {
  Container,
  Image,
  InfoWrapper,
  Info,
  Icons,
  Price,
  User,
} from "./style";
import noimg from "../../assets/images/noimg.jpg";
import nouser from "../../assets/images/avatar1.png";
import { useNavigate } from "react-router-dom";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Card = ({ data, margin }) => {
  const onZoom = (img) => {
    // console.log();
    return (
      <Zoom>
        <img alt={img} src={data?.attachments[0]?.imgPath} width="500" />
      </Zoom>
    );
  };

  const navigate = useNavigate();
  console.log(data);
  return (
    <Container margin={margin}>
      <Zoom>
        <Image alt={"img"} src={data?.attachments[0]?.imgPath} width="500" />
      </Zoom>
      <InfoWrapper onClick={() => navigate(`/properties/${data.id}`)}>
        <User>
          <User.Img src={data?.user || nouser} />
        </User>
        <Info.Title>
          {data?.description || "description"} Category:{data?.category?.name}
        </Info.Title>
        <Info.Text>
          {data?.name || "house"}, {data?.address || "Address"},
          {data?.city || "City"} {data?.country || "Country"}
        </Info.Text>
        <Info.Detailes>
          <Icons.Wrapper>
            <Icons.Bed />
            <Info.Text>{data?.houseDetails?.bed || 0} Beds</Info.Text>
          </Icons.Wrapper>
          <Icons.Wrapper>
            <Icons.Bath />
            <Info.Text>{data?.houseDetails?.bath || 0} Baths</Info.Text>
          </Icons.Wrapper>
          <Icons.Wrapper>
            <Icons.Garage />
            <Info.Text>{data?.houseDetails?.garage || 0} Garages</Info.Text>
          </Icons.Wrapper>
          <Icons.Wrapper>
            <Icons.Ruler />
            <Info.Text>{data?.houseDetails?.area || 0} Sq Ft</Info.Text>
          </Icons.Wrapper>
        </Info.Detailes>
      </InfoWrapper>
      <Price>
        <Price.Wrapper>
          <Price.Sale>{data?.salePrice || 0} / month</Price.Sale>
          <Price.Origin>{data?.price || 0} / month</Price.Origin>
        </Price.Wrapper>
        <Price.IconWrapper>
          <Icons.Resize onClick={() => onZoom(data?.attachments[0]?.imgPath)} />
          <Icons.Love />
        </Price.IconWrapper>
      </Price>
    </Container>
  );
};

export default Card;
