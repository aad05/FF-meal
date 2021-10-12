import React from "react";
import { Container, Title, Wrapper } from "./style";

export const KANavbar = () => {
  return (
    <Container>
      <Wrapper left="true">
        <Title>Kategoriya (uz)</Title>
      </Wrapper>
      <Wrapper>
        <Title>Kategoriya (ru) </Title>
      </Wrapper>
      <Wrapper>
        <Title>Bosh Kategoriya</Title>
      </Wrapper>
      <Wrapper>
        <Title>Action</Title>
      </Wrapper>
    </Container>
  );
};
export default KANavbar;
