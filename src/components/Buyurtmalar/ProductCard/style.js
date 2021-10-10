import styled from "styled-components";
import { ReactComponent as user } from "../../../assets/icon/user.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 6px;
  width: 100%;
  height: 430px;
  max-height: fit-content;
  padding: 0 20px 20px 20px;
  margin-bottom: 10px;
  transition: all 0.3s;
  :hover {
    box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
  }
  @media (max-width: 1450px) {
    padding: 0 15px 15px 15px;
  }
  @media (max-width: 1580px) {
    height: 480px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ flex }) => flex && "column"};
  padding: 20px;
  width: 100%;
  align-items: ${({ align }) => align && "center"};
  padding-bottom: ${({ last }) => !last && "25px"};
  border-bottom: ${({ last }) => !last && "1px solid #d9d7d7"};
`;
export const Info = styled.div`
  display: flex;
`;
Info.OrderID = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 80px;
  max-width: fit-content;
  height: 36px;
  background: #20d472;
  border-radius: 18px;
  font-family: SFProDisplay;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.466667px;
  color: #ffffff;
  cursor: pointer;
  margin-right: 25px;
  @media (max-width: 1900px) {
    width: 60px;
    height: 30px;
    margin-right: 15px;
  }
  @media (max-width: 1600px) {
    width: 50px;
    height: 25px;
    margin-right: 10px;
  }
  @media (max-width: 1500px) {
    width: 40px;
    height: 30px;
    margin-right: 5px;
  }
  @media (max-width: 1300px) {
    width: 30px;
    height: 30px;
    margin-right: 5px;
  }
`;
Info.User = styled(user)`
  width: 24px;
  height: 24px;
  margin-right: 22px;
`;
export const SaveWrapper = styled.div`
  width: 36px;
  height: 36px;
  background: #edeff3;
  border-radius: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media (max-width: 1900px) {
    width: 40px;
    height: 30px;
  }
  @media (max-width: 1600px) {
    width: 20px;
    height: 20px;
  }
`;
export const Save = styled.img`
  width: 14px;
  height: 16px;
  @media (max-width: 1600px) {
    width: 12px;
    height: 12px;
  }
`;
export const ClockWrapper = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
`;
export const Clock = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 5px;
  @media (max-width: 1900px) {
    width: 20px;
    height: 20px;
  }
  @media (max-width: 1900px) {
    width: 17px;
    height: 17px;
  }
`;
Info.Text = styled.div`
  font-family: SFProDisplay;
  font-size: 22px;
  line-height: 16px;
  color: #2d3a45;
  @media (max-width: 1900px) {
    font-size: 18px;
  }
  @media (max-width: 1700px) {
    font-size: 15px;
  }
  @media (max-width: 1550px) {
    font-size: 13px;
  }
`;
Info.Name = styled.div`
  font-family: SFProDisplay;
  font-size: 23px;
  line-height: 20px;
  letter-spacing: 0.533333px;
  color: #2d3a45;
  @media (max-width: 1900px) {
    font-size: 19px;
  }
  @media (max-width: 1700px) {
    font-size: 15px;
  }
`;
Info.Number = styled.div`
  font-family: SFProDisplay;
  font-size: 17px;
  line-height: 18px;
  letter-spacing: 0.4px;
  color: #2d3a45;
  mix-blend-mode: normal;
  opacity: 0.7;
  margin: 5px 0 20px 0;
  @media (max-width: 1900px) {
    font-size: 15px;
  }
  @media (max-width: 1700px) {
    font-size: 13px;
  }
  @media (max-width: 1500px) {
    font-size: 10px;
  }
`;
Info.Total = styled.div`
  font-family: SFProDisplay;
  font-size: 17px;
  line-height: 18px;
  letter-spacing: 0.366667px;
  color: #8d9ba8;
  margin-bottom: 5px;
  margin-top: ${({ top }) => top && "20px"};
  @media (max-width: 1900px) {
    font-size: 13px;
  }
`;
Info.Price = styled.div`
  font-family: SFProDisplay bold;
  font-size: 25px;
  line-height: 18px;
  letter-spacing: 0.666667px;
  color: #2d3a45;
  @media (max-width: 1900px) {
    font-size: 20px;
  }
  @media (max-width: 1412px) {
    font-size: 18px;
  }
`;
export const UserCard = styled.div`
  display: flex;
  margin-top: ${({ space }) => space && "20px"};
`;
UserCard.Titile = styled.div`
  display: flex;
  flex-direction: column;
`;
Info.Payme = styled.div`
  width: 15px;
  height: 15px;
  background: #14e5e4;
  border-radius: 50%;
  cursor: pointer;
  margin-left: auto;
  margin-right: 5px;
  @media (max-width: 1900px) {
    width: 13px;
    height: 13px;
  }
`;
Info.PaymeText = styled.div`
  font-family: SFProDisplay;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.466667px;
  color: #2d3a45;
  cursor: pointer;
  @media (max-width: 1900px) {
    font-size: 12px;
  }
`;
export const GenericWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  justify-content: space-around;
`;
export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
