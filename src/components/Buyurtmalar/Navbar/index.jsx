import React, { useState } from "react";
import {
  Container,
  IconsWrapper,
  MenuH,
  MenuV,
  Plus,
  Tab,
  Title,
  Toggle,
  Wrapper,
  ToggleClone,
} from "./style";

const Navbar = (props) => {
  const [isActive, setActive] = useState("yangi");
  const [isTabActive, setTabActive] = useState(true);
  console.log(isTabActive);

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
            <MenuV />
          </IconsWrapper>
          <IconsWrapper
            active={!isTabActive}
            onClick={() => {
              setTabActive(false);
              props.onClick(false);
            }}
          >
            <MenuH />
          </IconsWrapper>
        </ToggleClone>
      </Wrapper>
      <Wrapper order={"second"}>
        <Tab active={isTabActive}>
          <Tab.Item
            onClick={() => {
              isTabActive && setActive("yangi");
              props.clicked("yangi");
            }}
            active={isActive === "yangi"}
          >
            Yangi
          </Tab.Item>

          <Tab.Item
            onClick={() => {
              isTabActive && setActive("qabul qilingan");
              props.clicked("qabul");
            }}
            active={isActive === "qabul qilingan"}
          >
            Qabul Qilingan
          </Tab.Item>

          <Tab.Item
            onClick={() => {
              isTabActive && setActive("jonatilgan");
              props.clicked("jonatilganlar");
            }}
            active={isActive === "jonatilgan"}
          >
            Jo'natilgan
          </Tab.Item>
          <Tab.Item
            onClick={() => {
              isTabActive && setActive("yopilgan");
              props.clicked("yopilgan");
            }}
            active={isActive === "yopilgan"}
          >
            Yopilgan
          </Tab.Item>
        </Tab>
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
