import React, { createContext, useState } from "react";

const Ctx = createContext();

export const Context = ({ children }) => {
  const [data, setData] = useState([]);
  return <Ctx.Provider value={[data, setData]}>{children}</Ctx.Provider>;
};
