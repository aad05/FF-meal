import styled from "styled-components";
export const Container = styled.div`
  position: relative;
  display: flex;
  margin: 10px;
`;
export const Wraper = styled.div`
  cursor: pointer;
  width: 500px;
  height: 350px;
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
  font-size: 16px;
  line-height: 14px;
  color: #2d3a45;
  margin-left: ${({ left }) => left && "auto"};
  margin-right: ${({ left }) => left && "20px"};
`;
export const WrapperProgress = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
export const Naqd = styled.div`
  min-width: 15px;
  min-height: 15px;
  border-radius: 50%;
  background: #fcb600;
  margin-right: 20px;
`;
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
`;
export const Terminal = styled.div`
  min-width: 15px;
  min-height: 15px;
  border-radius: 50%;
  background: #20d472;
  margin-right: 20px;
`;
export const Payme = styled.div`
  min-width: 15px;
  min-height: 15px;
  border-radius: 50%;
  background: #64edf4;
  margin-right: 20px;
`;
export const Left = styled.div`
  margin-left: auto;
`;
export const Total = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9fafb;
  border-radius: 4px;
  width: 153px;
  height: 33px;
  margin-top: 60px;
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
