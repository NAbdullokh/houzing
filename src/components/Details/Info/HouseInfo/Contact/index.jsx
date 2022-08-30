import React from "react";
import { Btn, Check, Container, InputWrap, User } from "./style";
import avatar1 from "../../../../../assets/images/avatar1.png";
import emailjs from "emailjs-com";

const ContactHouse = ({ data }) => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_148o37t", e.target, "dXpRQ82PWumQI-HhZ")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    alert("sended");
  };
  return (
    <Container>
      <form onSubmit={sendEmail}>
        <User>
          <User.Img src={avatar1} alt="avatar1" />
          <div>
            <User.Name>Abdulloh</User.Name>
            <User.Number>(123)456-7890</User.Number>
          </div>
        </User>
        <InputWrap>
          <InputWrap.Input name="from_name" type="text" placeholder="Name" />
          <InputWrap.Input name="number" type="number" placeholder="Phone" />
          <InputWrap.Input name="email" type="email" placeholder="Email" />
          <InputWrap.Input name="message" type="text" placeholder="Message" />
        </InputWrap>
        <Check>
          <Check.CheckBox type="checkbox" />
          <User.Number>
            By submitting this form I agree to Terms of Use
          </User.Number>
        </Check>
        <Btn type="submit" value="Send request" />
      </form>
    </Container>
  );
};

export default ContactHouse;
