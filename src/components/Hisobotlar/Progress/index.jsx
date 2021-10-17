import React, { useState } from "react";
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
  Buton,
} from "./style";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Calendars from "../../Generic/Calendar";
import ChildProgress from "../ChildProgress";
import PaymeICon from "../Payme";
import TarminalIcon from "../Terminal";

export const Progress = () => {
  const [value, onChange] = useState(new Date());
  const [position, setPosition] = useState("none");
  return (
    <Container>
      <Wraper>
        <Top>
          <Title>Tolov Turlari | Uchqo'rg'on</Title>
          <Title left="true">19.02.2020</Title>
          <div onClick={() => setPosition("flex")}>
            <Calendars />
          </div>
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
      <div
        style={{
          display: position,
          position: "absolute",
          top: "70px",
          right: "30px",
        }}
      >
        <Calendar width="200" onChange={onChange} value={value} />
        <Buton onClick={() => setPosition("none")}>X</Buton>
      </div>
    </Container>
  );
};
export default Progress;
