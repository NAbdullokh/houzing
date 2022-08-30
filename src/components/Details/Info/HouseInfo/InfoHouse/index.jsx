import React from "react";
import {
  Box1,
  Box2,
  Box2Icons,
  Box2Price,
  Container,
  EachIcon,
  Icons,
  IconWrappers,
  Price,
} from "./style";
import share from "../../../../../assets/icons/share.svg";
import like from "../../../../../assets/icons/love 1.svg";

const HouseInfo = ({ data }) => {
  return (
    <Container>
      <Box1>
        <p className="title">{data?.name || "no name"}</p>
        <p className="description">{data?.description || "no description"}</p>
        <Icons>
          <Icons.Wrapper>
            <Icons.Bed />
            <Icons.Text>{data?.houseDetails?.bed || 0} Beds</Icons.Text>
          </Icons.Wrapper>
          <Icons.Wrapper>
            <Icons.Bath />
            <Icons.Text>{data?.houseDetails?.bath || 0} Baths</Icons.Text>
          </Icons.Wrapper>
          <Icons.Wrapper>
            <Icons.Garage />
            <Icons.Text>{data?.houseDetails?.garage || 0} Garages</Icons.Text>
          </Icons.Wrapper>
          <Icons.Wrapper>
            <Icons.Ruler />
            <Icons.Text>{data?.houseDetails?.area || 0} Sq Ft</Icons.Text>
          </Icons.Wrapper>
          <Icons.Wrapper>
            <Icons.Calendar />
            <Icons.Text>
              Year Built: {data?.houseDetails?.yearBuilt || 0}
            </Icons.Text>
          </Icons.Wrapper>
        </Icons>
      </Box1>
      <Box2>
        <Box2Icons>
          <EachIcon>
            <IconWrappers>
              <img src={share} alt="share" />
            </IconWrappers>
            <Icons.Text>Share</Icons.Text>
          </EachIcon>

          <EachIcon>
            <IconWrappers>
              <img src={like} alt="share" />
            </IconWrappers>
            <Icons.Text>Save</Icons.Text>
          </EachIcon>
        </Box2Icons>
        <Box2Price>
          <Icons.Text>
            {data.salePrice} <p className="title">${data.price}/mo</p>{" "}
          </Icons.Text>
          <Icons.Text>Est. Mortgage</Icons.Text>
        </Box2Price>
      </Box2>
    </Container>
  );
};

export default HouseInfo;
