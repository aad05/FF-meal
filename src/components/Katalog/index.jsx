import React from "react";
import { Container } from "./style";
import Navbar from "./Navbar";
import Upload from "./Body";

export const Katalog = () => {
  return (
    <Container>
      <Navbar />
      <Upload />
    </Container>
  );
};
export default Katalog;
