import React from "react";
import {
  Container,
  ButtonAll,
  RestoreButton,
  Restore,
  RestoreIcon,
} from "./style";
import ProductCardH from "../ProductCardH";
import { BuyurtmaContext } from "../../../context/buyurtmalar";
import restoreIcon from "../../../assets/icon/restoreIcon.svg";
import { useState } from "react";
import Fade from "react-reveal/Fade";

export const MenuH = ({ productType }) => {
  const [buyurtmaData, setBuyurtmaData] = BuyurtmaContext();
  const [data] = useState(buyurtmaData);
  const restore = () => {
    setBuyurtmaData(data);
  };
  return (
    <Container>
      {buyurtmaData[productType].map((value) => (
        <Fade top>
          <ProductCardH key={value.id} value={value} />
        </Fade>
      ))}
      {buyurtmaData[productType].length === 0 ? (
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
    </Container>
  );
};
export default MenuH;
