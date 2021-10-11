import React from "react";
import { Container, Title, Wrapper } from "./style";

export const DNDNavbar = () => {
  return (
    <Container>
      <Wrapper left="true">
        <Title>Maxsulotlar</Title>
      </Wrapper>
      <Wrapper>
        <Title>Kategoriya</Title>
      </Wrapper>
      <Wrapper>
        <Title>Narxi</Title>
      </Wrapper>
      <Wrapper>
        <Title>Qo'shimcha</Title>
      </Wrapper>
      <Wrapper>
        <Title>Action</Title>
      </Wrapper>
    </Container>
  );
};
export default DNDNavbar;
