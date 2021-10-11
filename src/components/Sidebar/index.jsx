import React from "react";
import {
  Container,
  LogoWrapper,
  Text,
  Wrapper,
  Link,
  Item,
  IconWrapper,
  activeStyle,
} from "./style";
import Logo from "../../assets/img/Logo.png";
import { sidebar } from "../../utils/sidebar";
import { ReactComponent as Chiqish } from "../../assets/icon/chiqish.svg";

export const Sidebar = () => {
  return (
    <Container>
      <LogoWrapper>
        <LogoWrapper.Img src={Logo} alt="Main Logo" />
        <Text>
          <Text.Title>Fast Food</Text.Title>
          <Text.Desc>Online Maxsulot Sotuvi</Text.Desc>
        </Text>
      </LogoWrapper>
      <Wrapper>
        {sidebar.map(({ id, titile, path, Icon }) => {
          return (
            <Item key={id}>
              <Link exact activeStyle={activeStyle} to={path}>
                <Icon className="icon" />
                {titile}
              </Link>
            </Item>
          );
        })}
      </Wrapper>
      <Wrapper chiqish="true">
        <IconWrapper>
          <Chiqish />
        </IconWrapper>
        <IconWrapper.Title>Chiqish</IconWrapper.Title>
      </Wrapper>
    </Container>
  );
};
export default Sidebar;
