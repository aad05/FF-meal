import React from "react";
import { Container } from "./style";
import ProductCardH from "../ProductCardH";
import { BuyurtmaContext } from "../../../context/buyurtmalar";

export const MenuH = ({ productType }) => {
  const [buyurtmaData] = BuyurtmaContext();
  return (
    <Container>
      {buyurtmaData[productType].map((value) => (
        <ProductCardH key={value.id} value={value} />
      ))}
    </Container>
  );
};
export default MenuH;
