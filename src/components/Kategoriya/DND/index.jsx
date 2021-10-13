import React, { useState } from "react";
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
  Input,
} from "./style";
import { data } from "../../../mock/kategoriya";
import Delete from "../../Generic/Delete";
import Edit from "../../Generic/Edit";
import Cancel from "../../Generic/Cancel";
import restoreIcon from "../../../assets/icon/restoreIcon.svg";

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
              {/* First */}
              <Title left="true">
                {selected === value.id ? (
                  <Input type="text" defaultValue={value.title} />
                ) : (
                  value.title + " (uz)"
                )}
              </Title>
              {/* Second */}
              <Title>
                {selected === value.id ? (
                  <Input type="text" defaultValue={value.rutitle} />
                ) : (
                  value.rutitle + " (ru)"
                )}
              </Title>
              {/* Third */}
              <Title>
                {selected === value.id ? (
                  <Input type="text" defaultValue={value.main} />
                ) : (
                  value.main
                )}
              </Title>
              <Action>
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
