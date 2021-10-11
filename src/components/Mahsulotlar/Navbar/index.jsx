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
import Filter from "../../Generic/Filter";

const Navbar = () => {
  return (
    <Container>
      <Wrapper width="true">
        <Plus />
        <Title>Yangi maxsulot qo'shish</Title>
      </Wrapper>
      <Wrapper>
        <InputWrapper>
          <Search placeholder="Qidirish" />
          <SearchIcon />
        </InputWrapper>
        <Filter />
      </Wrapper>
    </Container>
  );
};
export default Navbar;
