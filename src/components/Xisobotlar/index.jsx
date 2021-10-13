import React, { useState } from "react";
import { Body } from "./body";
import Navbar from "./Navbar";
import { Container } from "./style";

const Xisobotlar = () => {
  const [active, setActive] = useState(true);
  return (
    <Container>
      <Navbar onClick={(state) => setActive(state)} />
      <Body active = {active} />
    </Container>
  );
};
export default Xisobotlar;
