import React, { useState } from "react";
import { Container, Footer, InputWrapper, Wrapper } from "./style";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const { mutate } = useMutation(() => {
    return fetch(
      `https://houzing-app.herokuapp.com/api/public/auth/login
    `,
      {
        method: "POST",
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    ).then((res) => res.json());
  });

  const onSubmit = () => {
    console.log(email, password);
    if (email?.length && password?.length) {
      mutate(
        {},
        {
          onSuccess: (res) => {
            if (res?.authenticationToken) {
              localStorage.setItem("token", res?.authenticationToken);
              setError(false);
              navigate("/home");
            } else {
              setError("Email yoki Password da Hatolik");
            }
          },
          onError: (res) => {
            console.log(res, "err");
          },
        }
      );
    } else {
      setError("Email yoki Password bosh bolmaslik kerak");
    }
  };
  return (
    <Wrapper>
      <Container>
        <Container.Title>Sign in</Container.Title>
        <InputWrapper>
          <InputWrapper.Input
            id="name"
            name="email"
            style={{ marginBottom: "44px" }}
            type="email"
            placeholder="Email"
            onChange={({ target: { value } }) => {
              setEmail(value);
              setError(false);
            }}
          />
          <InputWrapper.Input
            style={{ marginBottom: "16px" }}
            type={show ? "text" : "password"}
            placeholder="Password"
            onChange={({ target: { value } }) => {
              setPassword(value);
              setError(false);
            }}
          />
        </InputWrapper>
        <p onClick={() => setShow(!show)}>show</p>

        <Footer>
          <Footer.Rem>
            <div>
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <Footer.Forgot>Forgot</Footer.Forgot>
          </Footer.Rem>
          <Footer.Btn onClick={onSubmit}>Login</Footer.Btn>
        </Footer>
      </Container>
    </Wrapper>
  );
};

export default SignIn;
