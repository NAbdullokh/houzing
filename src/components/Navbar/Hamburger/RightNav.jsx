import React from "react";
import { navbar } from "../../../utils/navbar";
import { NavLink } from "react-router-dom";
import facebook from "../../../assets/icons/facebook.svg";
import twitter from "../../../assets/icons/twitter.svg";
import instagram from "../../../assets/icons/instagram.svg";
import linkedIn from "../../../assets/icons/linkedIn.svg";

import { EachIcon, SocialWrap, Title, Ul } from "./style";
export const RightNav = ({ open }) => {
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return (
    <Ul open={open}>
      {navbar.map((value) => {
        return (
          !value.hidden && (
            <NavLink
              onClick={() => open.fn(false)}
              key={value.id}
              to={value.path}
            >
              <p className="subTitle">{value.title}</p>
            </NavLink>
          )
        );
      })}
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
    </Ul>
  );
};
export default RightNav;
