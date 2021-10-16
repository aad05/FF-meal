import React, { useState, useEffect } from "react";
import Diagram from "../Diagram";
import { Container, Wrapper } from "./style";
import Diagramm from "../Diagramm";
import Progress from "../Progress";
import { BoxesLoader } from "react-awesome-loaders";
export const Charts = (props) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {props.refresh && loading ? (
        <Wrapper>
          <BoxesLoader
            boxColor={"#6366F1"}
            style={{ marginBottom: "20px" }}
            desktopSize={"128px"}
            mobileSize={"80px"}
          />
        </Wrapper>
      ) : (
        <Container>
          <Diagram />
          <Diagramm />
          <Progress />
        </Container>
      )}
    </>
  );
};
export default Charts;
