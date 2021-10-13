import React from "react";
import {
  Container,
  Title,
  Top,
  Wraper,
  WrapperProgress,
  Naqd,
  TitleWrapper,
  Terminal,
  Payme,
  Left,
  Total,
} from "./style";
import Calendar from "../../Generic/Calendar";
import ChildProgress from "../ChildProgress";
import PaymeICon from "../Payme";
import TarminalIcon from "../Terminal";

export const Progress = () => {
  return (
    <Container>
      <Wraper>
        <Top>
          <Title>Tolov Turlari | Uchqo'rg'on</Title>
          <Title left="true">19.02.2020</Title>
          <Calendar />
        </Top>
        <WrapperProgress>
          <TitleWrapper>
            <Terminal />
            <Title>Terminal - 1,200,000 UZS</Title>
            <Left>
              <TarminalIcon done="45" />
            </Left>
          </TitleWrapper>
          <TitleWrapper>
            <Naqd />
            <Title>Naqd - 1,340,000 UZS</Title>
            <Left>
              <ChildProgress done="57" />
            </Left>
          </TitleWrapper>
          <TitleWrapper>
            <Payme />
            <Title>Payme - 1,200,000 UZS</Title>
            <Left>
              <PaymeICon done="75" />
            </Left>
          </TitleWrapper>
          <Total>3,740,000 UZS</Total>
        </WrapperProgress>
      </Wraper>
    </Container>
  );
};
export default Progress;
