import React from "react";
import { Wrapper, Container, Image, MainImg } from "./style";
import house1 from "../../../assets/images/house1.png";
import house2 from "../../../assets/images/house2.png";
import house3 from "../../../assets/images/house3.png";
import house4 from "../../../assets/images/house4.png";

const Images = ({ data }) => {
  return (
    // <Container>
    //   <Box1>
    //     ds
    //     {/* <Box1.Img src={data.attachments[0].imgPath} alt="" /> */}
    //   </Box1>
    //   <Box2>
    //     <Box2.Img src={house1} alt="house1" />
    //     <Box2.Img src={house2} alt="house2" />
    //     <Box2.Img src={house3} alt="house3" />
    //     <div className="center" style={{ position: "relative" }}>
    //       <Box2.Img src={house4} alt="house4" />
    //       <Box2.Img.Number>+15</Box2.Img.Number>
    //     </div>
    //   </Box2>
    // </Container>
    <Container>
      <Wrapper.H1>
        <MainImg src={house1} />
      </Wrapper.H1>
      <Wrapper.H2>
        <Image src={house4} />
      </Wrapper.H2>
      <Wrapper.H3>
        <Image src={house2} />
      </Wrapper.H3>
      <Wrapper.H4>
        <Image src={house3} />
      </Wrapper.H4>
      <Wrapper.H5>
        <Image src={house4} />
        <Wrapper.Number>+15</Wrapper.Number>
      </Wrapper.H5>
    </Container>
  );
};

export default Images;
