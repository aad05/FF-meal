import React, { useState } from "react";
import {
  Container,
  IconsWrapper,
  Plus,
  Tab,
  Title,
  Toggle,
  Wrapper,
  ToggleClone,
  SearchIcon,
  FilterDiv,
  Filter,
  Stats,
  Download,
} from "./style";

const Navbar = (props) => {
  // const [isActive, setActive] = useState("yangi");
  const [isTabActive, setTabActive] = useState(true);
  return (
    <Container>
      <Wrapper align="true" order={"first"}>
        <Plus />
        <Title>Yangi buyurtma qo'shish</Title>
        <ToggleClone>
          <IconsWrapper
            active={isTabActive}
            onClick={() => {
              setTabActive(true);
              props.onClick(true);
            }}
          >
            <Stats />
          </IconsWrapper>
          <IconsWrapper
            active={!isTabActive}
            onClick={() => {
              setTabActive(false);
              props.onClick(false);
            }}
          >
            <Download />
          </IconsWrapper>
        </ToggleClone>
      </Wrapper>
      <Wrapper order={"second"}>
        <Tab placeholder={"Qidirish"} />
        <SearchIcon />
        <FilterDiv>
          <Filter />
        </FilterDiv>
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
            <Download active={isTabActive} />
          </IconsWrapper>
          <IconsWrapper
            active={!isTabActive}
            onClick={() => {
              setTabActive(false);
              props.onClick(false);
            }}
          >
            <Stats active={!isTabActive} />
          </IconsWrapper>
        </Toggle>
      </Wrapper>
    </Container>
  );
};
export default Navbar;
