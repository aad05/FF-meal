import React from "react";
import {
  Container,
  Wrapper,
  Info,
  SaveWrapper,
  Save,
  ClockWrapper,
  Clock,
  Time,
  UserCard,
  WrapperInSide,
  Meghts,
} from "./style";
import save from "../../../assets/icon/bookmark.svg";
import clock from "../../../assets/icon/clock.svg";
import Cancel from "../../Generic/Cancel";
import Done from "../../Generic/Done";
import { BuyurtmaContext } from "../../../context/buyurtmalar";

export const ProductCard = ({ value }) => {
  const [buyurtmaData, setBuyurtmaData] = BuyurtmaContext();
  const onCancel = () => {
    let filtered = buyurtmaData[value.categoriya].filter(
      (item) => item.id !== value.id
    );
    console.log(filtered);
    let newData = { ...buyurtmaData, [value.categoriya]: filtered };
    setBuyurtmaData(newData);
  };
  return (
    <>
      <Container>
        <Wrapper>
          <Info.Top>
            <Info.OrderID>{value.orderId}</Info.OrderID>
            <SaveWrapper>
              <Save src={save} />
            </SaveWrapper>
          </Info.Top>
          <Time>
            <ClockWrapper>
              <Clock src={clock} />
            </ClockWrapper>
            <Info.Text>
              {`${value.time.getHours()} : ${value.time.getMinutes()}`}
            </Info.Text>
          </Time>
        </Wrapper>
        <Wrapper>
          <UserCard>
            <UserCard.Info>
              <UserCard.User />
              <Info.Name>{value.user.name}</Info.Name>
            </UserCard.Info>
            <UserCard.Info top="true">
              <UserCard.Phone />
              <Info.Number>+998 {value.user.phone}</Info.Number>
            </UserCard.Info>
          </UserCard>
        </Wrapper>
        <Wrapper>
          <WrapperInSide>
            <WrapperInSide.Top space="true">
              <WrapperInSide.Bottom>
                <WrapperInSide.Top>
                  <UserCard.Notepad />
                  <Info.Number>{value.total} UZS</Info.Number>
                </WrapperInSide.Top>
                <WrapperInSide.Top>
                  <UserCard.Car />
                  <Info.Number>{value.total} UZS</Info.Number>
                </WrapperInSide.Top>
              </WrapperInSide.Bottom>
              <WrapperInSide.Top>
                <Info.Payme />
                <Info.PaymeText>Payme</Info.PaymeText>
              </WrapperInSide.Top>
            </WrapperInSide.Top>
            <WrapperInSide.Bottom>
              <Info.Total>Umumiy Summa</Info.Total>
              <Info.Price>{value.total} UZS</Info.Price>
            </WrapperInSide.Bottom>
          </WrapperInSide>
        </Wrapper>
        <Wrapper end="true">
          <WrapperInSide.Bottom space="true">
            <div>
              <Info.Total>Operator:</Info.Total>
              <Info.Name>{value.operator.name}</Info.Name>
            </div>
            <Info.Total top="true">Filial:</Info.Total>
            <Info.Name>
              {value.filial.title}
              <br />
              {value.filial.location}
            </Info.Name>
          </WrapperInSide.Bottom>
        </Wrapper>
        <Meghts>
          <div onClick={onCancel}>
            <Cancel />
          </div>
          <div style={{ paddingTop: "50px" }}>
            <Done />
          </div>
        </Meghts>
      </Container>
    </>
  );
};
export default ProductCard;
