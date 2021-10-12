import React, { useState } from "react";
import {
  Container,
  Dates,
  Wrapper,
  Image,
  Title,
  Action,
  ImageText,
  Input,
} from "./style";
import { data } from "../../../mock/mahsulotlar";
import Delete from "../../Generic/Delete";
import Edit from "../../Generic/Edit";
import Cancel from "../../Generic/Cancel";

export const DND2 = () => {
  const [baza, setBaza] = useState(data);
  const [selected, setSelected] = useState(null);
  const [currentCard, setCurrentCard] = useState(null);
  const onDelete = (value) => {
    const filtered = baza.filter((data) => data.id !== value.id);
    setBaza(filtered);
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
      {baza.length !== 0
        ? baza.sort(sortCards).map((value) => (
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
                  <Image src={value.Img} />
                  <Title left="true">
                    {selected === value.id ? (
                      <Input type="text" defaultValue={value.title} />
                    ) : (
                      value.title
                    )}
                  </Title>
                </ImageText>
                <Title>
                  {selected === value.id ? (
                    <Input type="text" defaultValue={value.categoriya} />
                  ) : (
                    value.categoriya
                  )}
                </Title>
                <Title>
                  {selected === value.id ? (
                    <Input type="text" defaultValue={value.price} />
                  ) : (
                    value.price + "UZS"
                  )}
                </Title>
                <Title>
                  {selected === value.id ? (
                    <Input type="text" defaultValue={value.qoshimcha} />
                  ) : (
                    value.qoshimcha
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
        : ""}
    </Container>
  );
};
export default DND2;
