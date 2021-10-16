import React, { useState } from "react";
import { Container } from "./style";
import Navbar from "./Navbar";
import Body from "./Body";
export const Filiallar = () => {
  const [showModal, setShowModal] = useState(false);
  console.log(showModal);
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
export default Filiallar;
