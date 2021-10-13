import React from "react";
import Diagram from "../Diagram";
import { Container } from "./style";
import Diagramm from "../Diagramm";
import Progress from "../Progress";
export const Charts = () => {
  return (
    <Container>
      <Diagram />
      <Diagramm />
      <Progress />
    </Container>
  );
};
export default Charts;
