import React, { useState, useEffect } from "react";
import {
  Container,
  Dates,
  Wrapper,
  Title,
  Action,
  ButtonAll,
  RestoreButton,
  Restore,
  RestoreIcon,
  Column,
  Info,
  Payme,
  Wrappers,
} from "./style";
import { data } from "../../../mock/xisobot";
import Delete from "../../Generic/Delete";
import restoreIcon from "../../../assets/icon/restoreIcon.svg";
import { BoxesLoader } from "react-awesome-loaders";

export const DND = (props) => {
  const [baza, setBaza] = useState(data);
  const [restore] = useState(data);
  const [currentCard, setCurrentCard] = useState(null);

  const onDelete = (value) => {
    const filtered = baza.filter((data) => data.id !== value.id);
    setBaza(filtered);
  };
  const onRestore = () => {
    setBaza(restore);
  };
  const dragStartHandler = (e, value) => {
    setCurrentCard(value);
  };
  const dragEndHandler = (e) => {
    e.target.style.background = "white";
  };
  const dragOverHandler = (e) => {
    e.preventDefault();
    e.target.style.background = "lightgray";
  };
  const dropHandler = (e, value) => {
    e.preventDefault();
    setBaza(
      baza.map((c) => {
        if (c.id === value.id) {
          return { ...c, order: currentCard.order };
        }
        if (c.id === currentCard.id) {
          return { ...c, order: value.order };
        }
        return c;
      })
    );
    e.target.style.background = "white";
  };
  const sortCards = (a, b) => {
    if (a.order < b.order) {
      return 1;
    } else {
      return -1;
    }
  };
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {props.refresh && loading ? (
        <Wrappers>
          <BoxesLoader
            boxColor={"#6366F1"}
            style={{ marginBottom: "20px" }}
            desktopSize={"128px"}
            mobileSize={"80px"}
          />
        </Wrappers>
      ) : (
        <Container>
          {baza.length !== 0 ? (
            baza.sort(sortCards).map((value) => (
              <Wrapper
                onDragStart={(e) => dragStartHandler(e, value)}
                onDragLeave={(e) => dragEndHandler(e)}
                onDragEnd={(e) => dragEndHandler(e)}
                onDragOver={(e) => dragOverHandler(e)}
                onDrop={(e) => dropHandler(e, value)}
                draggable={true}
                key={value.id}
              >
                <Dates>
                  <Title left="true">
                    <Column location="true">{value.location}</Column>
                    <Column>{value.operator}</Column>
                  </Title>
                  <Title>
                    <Column location="true">{value.orderprice} UZS</Column>
                    <Info>
                      <Payme />
                      <Column>Payme</Column>
                    </Info>
                  </Title>
                  <Title left="true">
                    <Column location="true">{value.user}</Column>
                    <Column>{value.phone}</Column>
                  </Title>
                  <Title left="true">
                    <Column location="true">
                      {value.sana.getDay()}.{value.sana.getMonth()}.
                      {value.sana.getFullYear()}
                    </Column>
                    <Column>
                      {value.time.getHours()}:{value.time.getMinutes()}:
                      {value.time.getSeconds()}
                    </Column>
                  </Title>
                  <Action>
                    <div onClick={() => onDelete(value)}>
                      <Delete />
                    </div>
                  </Action>
                </Dates>
              </Wrapper>
            ))
          ) : (
            <ButtonAll onClick={onRestore}>
              <RestoreButton>
                <Restore className="btn-pill">
                  <span>
                    <RestoreIcon src={restoreIcon} />
                    Restore
                  </span>
                </Restore>
              </RestoreButton>
            </ButtonAll>
          )}
        </Container>
      )}
    </>
  );
};
export default DND;
