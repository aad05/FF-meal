import React, { useState } from "react";
import {
  Container,
  Dates,
  Wrapper,
  Title,
  Action,
  ImageText,
  ButtonAll,
  RestoreButton,
  Restore,
  RestoreIcon,
  Input,
  Status,
} from "./style";
import { data } from "../../../mock/mijozlar";
import Delete from "../../Generic/Delete";
import Edit from "../../Generic/Edit";
import Cancel from "../../Generic/Cancel";
import restoreIcon from "../../../assets/icon/restoreIcon.svg";
import Agree from "../../Generic/Agree";
// import Disagree from "../../Generic/Disagree";
export const DND = () => {
  const [baza, setBaza] = useState(data);
  const [restore] = useState(data);
  const [selected, setSelected] = useState(null);
  const [currentCard, setCurrentCard] = useState(null);
  const onDelete = (value) => {
    const filtered = baza.filter((data) => data.id !== value.id);
    setBaza(filtered);
  };

  const onRestore = () => {
    setBaza(restore);
  };
  const onEdit = (value) => {
    setSelected(value.id);
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
  return (
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
              <ImageText>
                <Title left="true">
                  {selected === value.id ? (
                    <Input type="text" defaultValue={value.name} />
                  ) : (
                    value.name
                  )}
                </Title>
              </ImageText>
              <Title>
                {selected === value.id ? (
                  <Input type="text" defaultValue={value.number} />
                ) : (
                  "+998 " + value.number
                )}
              </Title>
              <Title>
                {selected === value.id ? (
                  <Input type="text" defaultValue={value.order} />
                ) : (
                  value.order
                )}
              </Title>
              <Status>{value.status}</Status>
              <Action>
                <div>
                  <Agree />
                </div>
                {/* <div>
                  <Disagree />
                </div> */}
                <div onClick={() => onDelete(value)}>
                  <Delete />
                </div>
                {selected === value.id ? (
                  <div onClick={() => setSelected(null)}>
                    <Cancel />
                  </div>
                ) : (
                  <div onClick={() => onEdit(value)}>
                    <Edit />
                  </div>
                )}
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
  );
};
export default DND;
