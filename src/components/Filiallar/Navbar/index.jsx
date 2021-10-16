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

const Navbar = (props) => {
  return (
    <Container>
      <Wrapper width="true">
        <Plus onClick={() => props.plusClicked()} />
        <Title>Yangi Filial qo'shish</Title>
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
