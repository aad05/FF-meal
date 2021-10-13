import styled from "styled-components";
export const Container = styled.div`
  display: flex;
`;
export const Wraper = styled.div`
  cursor: pointer;
  width: 500px;
  height: 300px;
  background-color: #fff;
  background: #ffffff;
  border-radius: 6px;
  :hover {
    box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
  }
`;
export const Top = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 6px rgba(174, 176, 181, 0.314986);
  width: 100%;
  height: 60px;
  padding: 0 30px;
`;
export const Title = styled.div`
  font-family: SFProDisplay;
  font-size: 12px;
  line-height: 14px;
  color: #2d3a45;
  margin-left: ${({ left }) => left && "auto"};
`;
