import React, { useState } from "react";
import Navbar from "./Navbar";
import { Container } from "./style";

const Xisobotlar = () => {
  const [active, setActive] = useState(true);
  return (
    <Container>
      <Navbar onClick={(state) => setActive(state)} />
    </Container>
  );
};
export default Xisobotlar;
