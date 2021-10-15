import React, { useState } from "react";
import {
  Container,
  Wrapper,
  Dashboar,
  Length,
  Text,
  RestoreWrapper,
  Restore,
  RestoreButton,
  RestoreIcon,
  ButtonAll,
} from "./style";
import ProductCard from "../ProductCard";
import { BuyurtmaContext } from "../../../context/buyurtmalar";
import restoreIcon from "../../../assets/icon/restoreIcon.svg";
export const Body = () => {
  const [card, setBuyurtmaData] = BuyurtmaContext();
  const [data] = useState(card);
  console.log(card);
  const restore = () => {
    setBuyurtmaData(data);
  };
  console.log(data);
  return (
    <RestoreWrapper>
      <Container>
        <Wrapper>
          <Text>
            Yangi <Length>{card.yangi.length}</Length>
          </Text>
          <Dashboar>
            <Dashboar.Icon />
            <Dashboar.Price>12.300.000 UZS</Dashboar.Price>
          </Dashboar>
          {card.yangi.map((value) => (
            <ProductCard key={value.id} value={value} />
          ))}
          {card.yangi.length === 0 ? (
            <ButtonAll>
              <RestoreButton>
                <Restore className="btn-pill">
                  <span>
                    <RestoreIcon src={restoreIcon} />
                    Restore
                  </span>
                </Restore>
              </RestoreButton>
            </ButtonAll>
          ) : (
            ""
          )}
        </Wrapper>
        <Wrapper>
          <Text>
            Qabul <Length>{card.qabul.length}</Length>
          </Text>
          <Dashboar>
            <Dashboar.Icon2 />
            <Dashboar.Price>12.300.000 UZS</Dashboar.Price>
          </Dashboar>
          {card.qabul.map((value) => (
            <ProductCard key={value.id} value={value} />
          ))}
          {card.qabul.length === 0 ? (
            <ButtonAll>
              <RestoreButton>
                <Restore className="btn-pill">
                  <span>
                    <RestoreIcon src={restoreIcon} />
                    Restore
                  </span>
                </Restore>
              </RestoreButton>
            </ButtonAll>
          ) : (
            ""
          )}
        </Wrapper>
        <Wrapper>
          <Text>
            Jo'natilgan <Length>{card.jonatilganlar.length}</Length>
          </Text>
          <Dashboar>
            <Dashboar.Icon3 />
            <Dashboar.Price>12.300.000 UZS</Dashboar.Price>
          </Dashboar>
          {card.jonatilganlar.map((value) => (
            <ProductCard key={value.id} value={value} />
          ))}
          {card.jonatilganlar.length === 0 ? (
            <ButtonAll onClick={restore}>
              <RestoreButton>
                <Restore className="btn-pill">
                  <span>
                    <RestoreIcon src={restoreIcon} />
                    Restore
                  </span>
                </Restore>
              </RestoreButton>
            </ButtonAll>
          ) : (
            ""
          )}
        </Wrapper>
        <Wrapper>
          <Text>
            Yopilganlar <Length>{card.yopilgan.length}</Length>
          </Text>
          <Dashboar>
            <Dashboar.Icon4 />
            <Dashboar.Price>12.300.000 UZS</Dashboar.Price>
          </Dashboar>
          {card.yopilgan.map((value) => (
            <ProductCard key={value.id} value={value} />
          ))}
          {card.yopilgan.length === 0 ? (
            <ButtonAll onClick={restore}>
              <RestoreButton>
                <Restore className="btn-pill">
                  <span>
                    <RestoreIcon src={restoreIcon} />
                    Restore
                  </span>
                </Restore>
              </RestoreButton>
            </ButtonAll>
          ) : (
            ""
          )}
        </Wrapper>
      </Container>
    </RestoreWrapper>
  );
};
export default Body;
