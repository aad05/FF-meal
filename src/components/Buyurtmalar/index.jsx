import React, { useState } from "react";
import Navbar from "./Navbar";
import Body from "./Body";
import { Container } from "./style";

const Buyurtmalar = () => {
  const [active, setActive] = useState(true);
  const [productType, setProType] = useState("yangi");

  return (
    <Container>
      <Navbar
        onClick={(state) => setActive(state)}
        clicked={(type) => setProType(type)}
      />
      <Body active={active} productType={productType} />
    </Container>
  );
};
export default Buyurtmalar;
