import React from "react";
import { Container, Title, Wrapper } from "./style";

export const DNDNavbar = () => {
  return (
    <Container>
      <Wrapper left="true">
        <Title>Filial</Title>
      </Wrapper>
      <Wrapper>
        <Title>buyurtma Summasi</Title>
      </Wrapper>
      <Wrapper>
        <Title>Mijoz</Title>
      </Wrapper>
      <Wrapper>
        <Title>Sana</Title>
      </Wrapper>
      <Wrapper>
        <Title>Action</Title>
      </Wrapper>
    </Container>
  );
};
export default DNDNavbar;
