import React, { useState } from "react";
import DNDNavbar from "../DNDNavbar";
import DND from "../DND";
import DND2 from "../DND2";
import Else from "../Else";
export const Body = () => {
  const [condition, setCondition] = useState(true);
  return (
    <div style={{ marginBottom: "30px" }}>
      <DNDNavbar />
      <DND />
      {condition ? (
        <div onClick={() => setCondition(false)}>
          <Else />
        </div>
      ) : (
        <DND2 />
      )}
    </div>
  );
};
export default Body;
