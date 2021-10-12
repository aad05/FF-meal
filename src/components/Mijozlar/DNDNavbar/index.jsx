import React from "react";
import { Container, Title, Wrapper } from "./style";

export const DNDNavbar = () => {
  return (
    <Container>
      <Wrapper left="true">
        <Title>Mijoz Ismi</Title>
      </Wrapper>
      <Wrapper>
        <Title>Telefon Raqam</Title>
      </Wrapper>
      <Wrapper>
        <Title>Buyurtma Soni</Title>
      </Wrapper>
      <Wrapper>
        <Title>Status</Title>
      </Wrapper>
      <Wrapper>
        <Title>Action</Title>
      </Wrapper>
    </Container>
  );
};
export default DNDNavbar;
