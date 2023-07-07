import React, { useContext, createContext, useState } from "react";
import L_body2 from "../Lbody2/L_body2";
import L_body3 from "../L_body3/L_body3";

export const Context = createContext();

const L_body23 = () => {
  const [display, setDisplay] = useState("slide-item");
  return (
    <Context.Provider value={({ display, setDisplay })}>
      <L_body2 />
      <L_body3 />
    </Context.Provider>
  );
}
export default L_body23