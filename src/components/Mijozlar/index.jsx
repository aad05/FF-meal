import React, { useState } from "react";
import { Container } from "./style";
import Navbar from "./Navbar";
import Body from "./Body";
export const Mijozlar = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Container>
      <Navbar plusClicked={() => setShowModal(true)} />
      <Body
        showModal={showModal}
        onModalCancel={() => setShowModal(!showModal)}
      />
    </Container>
  );
};
export default Mijozlar;
