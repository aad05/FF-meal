import React, { useState } from "react";
import {
  YMaps,
  Map,
  Placemark,
  TypeSelector,
  GeolocationControl,
  FullscreenControl,
  RouteButton,
  SearchControl,
  TrafficControl,
  ZoomControl,
} from "react-yandex-maps";
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
  ReactYandex,
  YandexTitle,
  Modal,
  ButtonX,
  ButtunInput,
  Inputs,
  WrapperIcons,
  Icons,
} from "./style";
import { data } from "../../../mock/filiallar";
import Delete from "../../Generic/Delete";
import Edit from "../../Generic/Edit";
import Cancel from "../../Generic/Cancel";
import restoreIcon from "../../../assets/icon/restoreIcon.svg";
import Maps from "../../Generic/Map";
import Save from "../../Generic/Save";
import basket from "../../../assets/icon/basket.svg";
import kategro from "../../../assets/icon/kategro.svg";
import ssss from "../../../assets/icon/price.svg";
import qoshim from "../../../assets/icon/qoshim.svg";
import Fade from "react-reveal/Fade";

export const DND = (props) => {
  const [baza, setBaza] = useState(data);
  const [restore] = useState(data);
  const [selected, setSelected] = useState(null);
  const [mapselected, setMapSelected] = useState(null);
  const [currentCard, setCurrentCard] = useState(null);
  const [title, setTitle] = useState("");
  const [rutitle, setRuTitle] = useState("");
  const [moljal, setMoljal] = useState("");
  const [ish, setIsh] = useState("");
  const [newCategoriya, setNewCategoriya] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newQoshimcha, setNewQoshimcha] = useState("");

  const onDelete = (value) => {
    const filtered = baza.filter((data) => data.id !== value.id);
    setBaza(filtered);
  };
  const onRestore = () => {
    setBaza(restore);
  };
  const onEdit = (value) => {
    setSelected(value.id);
    setTitle(value.title);
    setRuTitle(value.rutitle);
    setMoljal(value.moljal);
    setIsh(value.ish);
  };
  const onMap = (value) => {
    setMapSelected(value.id);
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
  const onSave = () => {
    let newData = baza.map((value) =>
      value.id === selected
        ? {
            ...value,
            title: title,
            rutitle: rutitle,
            moljal: moljal,
            ish: ish,
            selected: value.id,
          }
        : value
    );
    setBaza(newData);
    setSelected(null);
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

  const onAdd = () => {
    const newBaza = {
      id: Math.random() * 30,
      title: newTitle,
      rutitle: newCategoriya,
      moljal: newPrice,
      ish: newQoshimcha,
    };
    const clone = baza;
    clone.push(newBaza);
    setBaza(clone);
    props.onModalCancel();
    setNewCategoriya("");
    setNewPrice("");
    setNewQoshimcha("");
    setNewTitle("");
  };
  return (
    <>
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
                      <Input
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        value={title}
                      />
                    ) : (
                      value.title
                    )}
                  </Title>
                </ImageText>
                <Title>
                  {selected === value.id ? (
                    <Input
                      onChange={(e) => setRuTitle(e.target.value)}
                      type="text"
                      value={rutitle}
                    />
                  ) : (
                    value.rutitle
                  )}
                </Title>
                <Title>
                  {selected === value.id ? (
                    <Input
                      onChange={(e) => setMoljal(e.target.value)}
                      type="text"
                      value={moljal}
                    />
                  ) : (
                    value.moljal
                  )}
                </Title>
                <Title>
                  {selected === value.id ? (
                    <Input
                      onChange={(e) => setIsh(e.target.value)}
                      type="text"
                      value={ish}
                    />
                  ) : (
                    value.ish
                  )}
                </Title>
                <Action>
                  {mapselected === value.id ? (
                    <div onClick={() => setMapSelected(null)}>
                      <Cancel />
                    </div>
                  ) : (
                    <div onClick={() => onMap(value)}>
                      <Maps />
                    </div>
                  )}
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
              {mapselected === value.id ? (
                <ReactYandex>
                  <YMaps>
                    <YandexTitle>Location</YandexTitle>
                    <Map
                      style={{ width: "100%", height: 300 }}
                      defaultState={{
                        center: [41.114592, 72.077593],
                        zoom: 5,
                      }}
                    >
                      <Placemark geometry={[41.114592, 72.077593]} />
                      <TypeSelector options={{ float: "right" }} />
                      <GeolocationControl options={{ float: "left" }} />
                      <FullscreenControl />
                      <RouteButton options={{ float: "right" }} />
                      <SearchControl options={{ float: "right" }} />
                      <TrafficControl options={{ float: "right" }} />
                      <ZoomControl options={{ float: "right" }} />
                    </Map>
                  </YMaps>
                </ReactYandex>
              ) : (
                ""
              )}
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
      {props.showModal && (
        <Modal>
          <ButtonX onClick={() => props.onModalCancel()}>X</ButtonX>
          <ButtunInput>
            <Fade right>
              <WrapperIcons>
                <Inputs
                  onChange={(e) => setNewTitle(e.target.value)}
                  value={newTitle}
                  placeholder="Filialni kiritin..."
                />
                <Icons src={basket} />
              </WrapperIcons>
            </Fade>
            <Fade right duration={1500}>
              <WrapperIcons>
                <Inputs
                  onChange={(e) => setNewCategoriya(e.target.value)}
                  value={newCategoriya}
                  placeholder="Filialni kiritin..."
                />
                <Icons src={kategro} />
              </WrapperIcons>
            </Fade>
            <Fade right duration={2000}>
              <WrapperIcons>
                <Inputs
                  onChange={(e) => setNewPrice(e.target.value)}
                  value={newPrice}
                  placeholder="Mo'ljalni kiritin..."
                />
                <Icons src={ssss} />
              </WrapperIcons>
            </Fade>
            <Fade right duration={2500}>
              <WrapperIcons>
                <Inputs
                  onChange={(e) => setNewQoshimcha(e.target.value)}
                  value={newQoshimcha}
                  placeholder="Ish Vaqtini Kiritin..."
                />
                <Icons src={qoshim} />
              </WrapperIcons>
            </Fade>
          </ButtunInput>
          {newTitle.length !== 0 &&
          newPrice.length !== 0 &&
          newQoshimcha.length !== 0 &&
          newCategoriya.length !== 0 ? (
            <Fade right duration={1300}>
              <ButtonAll onClick={onAdd} width="true">
                <RestoreButton>
                  <Restore width="true" className="btn-pill">
                    <span>
                      <RestoreIcon src={restoreIcon} />
                      Add
                    </span>
                  </Restore>
                </RestoreButton>
              </ButtonAll>
            </Fade>
          ) : (
            ""
          )}
        </Modal>
      )}
    </>
  );
};
export default DND;
