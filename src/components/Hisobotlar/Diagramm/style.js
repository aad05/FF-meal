import styled from "styled-components";
export const Container = styled.div`
  position: relative;
  display: flex;
  margin: 10px;
`;
export const Wraper = styled.div`
  cursor: pointer;
  width: 500px;
  height: 400px;
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
  margin-right: ${({ left }) => left && "20px"};
`;
export const Buton = styled.div`
  position: absolute;
  top: -10px;
  right: -30px;
  width: 20px;
  height: 20px;
  background-color: #056edc;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  cursor: pointer;
  border-radius: 6px;
`;
