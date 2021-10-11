import React, { useState } from "react";
import {
  Container,
  Dates,
  Wrapper,
  Image,
  Title,
  Action,
  ImageText,
  ButtonAll,
  RestoreButton,
  Restore,
  RestoreIcon,
  Input,
} from "./style";
import { data } from "../../../mock/mahsulotlar";
import Delete from "../../Generic/Delete";
import Edit from "../../Generic/Edit";
import Cancel from "../../Generic/Cancel";
import restoreIcon from "../../../assets/icon/restoreIcon.svg";

export const DND = () => {
  const [baza, setBaza] = useState(data);
  const [restore] = useState(data);
  const [selected, setSelected] = useState(null);

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

  return (
    <Container>
      {baza.length !== 0 ? (
        baza.map((value) => (
          <Wrapper key={value.id}>
            <Dates>
              <ImageText>
                <Image src={value.Img} />
                <Title left="true">
                  {selected === value.id ? (
                    <Input type="text" value={value.title} />
                  ) : (
                    value.title
                  )}
                </Title>
              </ImageText>
              <Title>
                {selected === value.id ? (
                  <Input type="text" value={value.categoriya} />
                ) : (
                  value.categoriya
                )}
              </Title>
              <Title>
                {selected === value.id ? (
                  <Input type="text" value={value.price} />
                ) : (
                  value.price + "UZS"
                )}
              </Title>
              <Title>
                {selected === value.id ? (
                  <Input type="text" value={value.qoshimcha} />
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
