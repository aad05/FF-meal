import React from "react";
import {
  Container,
  Wrapper,
  Plus,
  Title,
  Search,
  InputWrapper,
  SearchIcon,
} from "./style";

const Navbar = () => {
  return (
    <Container>
      <Wrapper width>
        <Plus />
        <Title>Yangi maxsulot qo'shish</Title>
      </Wrapper>
      <Wrapper>
        <InputWrapper>
          <Search placeholder="Qidirish" />
          <SearchIcon />
        </InputWrapper>
      </Wrapper>
    </Container>
  );
};
export default Navbar;
