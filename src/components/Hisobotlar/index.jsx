import React, { useState } from "react";
import Navbar from "./Navbar";
import Body from "./Body";
import { Container } from "./style";

const Hisobot = () => {
  const [active, setActive] = useState(true);
  const [refresh, setRefresh] = useState(false);
  console.log(refresh);
  return (
    <Container>
      <Navbar
        onRefresh={() => setRefresh(true)}
        onClick={(state) => setActive(state)}
      />
      <Body
        cancel={() => setRefresh(!refresh)}
        refresh={refresh}
        active={active}
      />
    </Container>
  );
};
export default Hisobot;
