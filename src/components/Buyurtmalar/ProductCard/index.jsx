import React from "react";
import {
  Clock,
  ClockWrapper,
  Container,
  Info,
  Save,
  SaveWrapper,
  Wrapper,
  UserCard,
  GenericWrapper,
  Footer,
  FooterWrapper,
} from "./style";
import save from "../../../assets/icon/bookmark.svg";
import clock from "../../../assets/icon/clock.svg";
import Cancel from "../../Generic/Cancel";
import Done from "../../Generic/Done";
import { BuyurtmaContext } from "../../../context/buyurtmalar";

export const ProductCard = ({ value }) => {
  const [card, setBuyurtmaData] = BuyurtmaContext();

  const onCancel = (value) => {
    let filtered = card[value.categoriya].filter(
      (data) => data.id !== value.id
    );
    let newData = { ...card, [value.categoriya]: filtered };
    setBuyurtmaData(newData);
  };
  const onDone = (value) => {
    // const onAdd = () => {
    //   let newBaze = {
    //     id: this.state.data[this.state.data.length - 1].id + 1,
    //     name: this.state.newName,
    //     status: this.state.newStatus,
    //   };
    //   let data2 = this.state.data;
    //   data2.push(newBaze);
    //   this.setState({
    //     data: data2,
    //   });
  };
  return (
    <Container>
      <Wrapper align>
        <Info.OrderID>{value.orderId}</Info.OrderID>
        <SaveWrapper>
          <Save src={save} />
        </SaveWrapper>
        <ClockWrapper>
          <Clock src={clock} />
        </ClockWrapper>
        <Info.Text>
          {`${value.time.getHours()} : ${value.time.getMinutes()}`}
        </Info.Text>
      </Wrapper>
      <Wrapper flex>
        <UserCard>
          <Info.User />
          <UserCard.Titile>
            <Info.Name>{value.user.name}</Info.Name>
            <Info.Number>+998 {value.user.phone}</Info.Number>
          </UserCard.Titile>
        </UserCard>
        <UserCard space>
          <div>
            <Info.Total>Umumiy summa</Info.Total>
            <Info.Price>{value.total} UZS</Info.Price>
          </div>
          <Info.Payme />
          <Info.PaymeText>Payme</Info.PaymeText>
        </UserCard>
      </Wrapper>
      <Wrapper last>
        <FooterWrapper>
          <Footer>
            <div>
              <Info.Total>Operator:</Info.Total>
              <Info.Name>{value.operator.name}</Info.Name>
            </div>
            <Info.Total top>Filial:</Info.Total>
            <Info.Name>
              {value.filial.title}
              <br />
              {value.filial.location}
            </Info.Name>
          </Footer>
          <GenericWrapper>
            <div onClick={() => onCancel(value)}>
              <Cancel />
            </div>
            <br />
            <div onClick={() => onDone(value)}>
              <Done />
            </div>
          </GenericWrapper>
        </FooterWrapper>
      </Wrapper>
    </Container>
  );
};
export default ProductCard;
