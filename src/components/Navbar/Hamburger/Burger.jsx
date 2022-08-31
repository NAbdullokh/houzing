import React, { useState } from "react";
import RightNav from "./RightNav";
import { StyledBurger } from "./style";

export const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledBurger open={open} fn={setOpen} onClick={() => setOpen(!open)}>
        <div />
        <div style={{ width: "40px" }} />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
};

export default Burger;
