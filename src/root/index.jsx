import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Details from "../components/Details";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Error from "../pages/Error";
import { navbar } from "../utils/navbar";
import { Container } from "./style";

export const Root = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route element={<Navbar />}>
          <Route element={<Footer />}>
            {navbar.map((value) => {
              return (
                <Route
                  key={value.id}
                  path={value.path}
                  element={value.element}
                />
              );
            })}
            <Route path="/properties/:id" element={<Details />} />
          </Route>
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Container>
  );
};

export default Root;
