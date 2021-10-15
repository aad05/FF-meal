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
import Save from "../../Generic/Save";

export const DND = () => {
  const [baza, setBaza] = useState(data);
  const [restore] = useState(data);
  const [main, setMain] = useState("");
  const [rutitle, setRuTitle] = useState("");
  const [title, setTitle] = useState("");
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
    setMain(value.main);
    setRuTitle(value.rutitle);
    setTitle(value.rutitle);
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
  const onSave = () => {
    let newData = baza.map((value) =>
      value.id === selected
        ? {
            ...value,
            title: title,
            rutitle: rutitle,
            main: main,
            selected: value.id,
          }
        : value
    );
    setBaza(newData);
    setSelected(null);
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
              <Title left="true">
                {selected === value.id ? (
                  <Input
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    value={title}
                  />
                ) : (
                  value.title + " (uz)"
                )}
              </Title>
              <Title>
                {selected === value.id ? (
                  <Input
                    onChange={(e) => setRuTitle(e.target.value)}
                    type="text"
                    value={rutitle}
                  />
                ) : (
                  value.rutitle + " (ru)"
                )}
              </Title>
              <Title>
                {selected === value.id ? (
                  <Input
                    onChange={(e) => setMain(e.target.value)}
                    type="text"
                    value={main}
                  />
                ) : (
                  value.main
                )}
              </Title>
              <Action>
                <div onClick={() => onDelete(value)}>
                  <Delete />
                </div>
                {selected === value.id ? (
                  <div style={{ display: "flex" }}>
                    <div onClick={onSave}>
                      <Save />
                    </div>
                    <div onClick={() => setSelected(null)}>
                      <Cancel />
                    </div>
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
