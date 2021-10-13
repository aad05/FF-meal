import React from "react";
import { Container } from "./style";
import ProductCardH from "../ProductCardH";
import { card } from "../../../mock/card";

export const MenuH = ({ productType }) => {
  return (
    <Container>
      {card[productType].map((value) => (
        <ProductCardH key={value.id} value={value} />
      ))}
      {/* <Wrapper>
        {card.yangi.map((value) => (
          <ProductCardH key={value.id} value={value} />
        ))}
      </Wrapper>
      <Wrapper>
        {card.qabul.map((value) => (
          <ProductCardH key={value.id} value={value} />
        ))}
      </Wrapper>
      <Wrapper>
        {card.jonatilganlar.map((value) => (
          <ProductCardH key={value.id} value={value} />
        ))}
      </Wrapper>

      <Wrapper>
        {card.yopilgan.map((value) => (
          <ProductCardH key={value.id} value={value} />
        ))}
      </Wrapper> */}
    </Container>
  );
};
export default MenuH;
