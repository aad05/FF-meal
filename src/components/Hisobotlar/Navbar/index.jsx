import React, { useState } from "react";
import {
  Container,
  IconsWrapper,
  MenuH,
  MenuV,
  Plus,
  Title,
  Toggle,
  Wrapper,
  InputWrapper,
  Search,
  SearchIcon,
} from "./style";
import Filter from "../../Generic/Filter";

const Navbar = (props) => {
  const [isTabActive, setTabActive] = useState(true);
  console.log(isTabActive);
  return (
    <Container>
      <Wrapper align="true" order={"first"}>
        <Plus />
        <Title>Yangi buyurtma qo'shish</Title>
      </Wrapper>
      <Wrapper order={"second"}>
        <InputWrapper>
          <Search placeholder="Qidirish" />
          <SearchIcon />
        </InputWrapper>
        <Filter />
      </Wrapper>
      <Wrapper align="true" order={"third"}>
        <Toggle>
          <IconsWrapper
            active={isTabActive}
            onClick={() => {
              setTabActive(true);
              props.onClick(true);
            }}
          >
            <MenuV active={isTabActive} />
          </IconsWrapper>
          <IconsWrapper
            active={!isTabActive}
            onClick={() => {
              setTabActive(false);
              props.onClick(false);
            }}
          >
            <MenuH active={!isTabActive} />
          </IconsWrapper>
        </Toggle>
      </Wrapper>
    </Container>
  );
};
export default Navbar;
