import React from "react";
import { Container, Title, Wrapper } from "./style";

export const DNDNavbar = () => {
  return (
    <Container>
      <Wrapper left="true">
        <Title>filial (uz)</Title>
      </Wrapper>
      <Wrapper>
        <Title>filial (ru)</Title>
      </Wrapper>
      <Wrapper>
        <Title>Mo'jal</Title>
      </Wrapper>
      <Wrapper>
        <Title>ish vaqti</Title>
      </Wrapper>
      <Wrapper>
        <Title>Action</Title>
      </Wrapper>
    </Container>
  );
};
export default DNDNavbar;
