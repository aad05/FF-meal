import styled from "styled-components";
import { ReactComponent as user } from "../../../assets/icon/user.svg";
import { ReactComponent as phone } from "../../../assets/icon/phone.svg";
import { ReactComponent as notepad } from "../../../assets/icon/notepad.svg";
import { ReactComponent as car } from "../../../assets/icon/car.svg";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 180px;
  background-color: #fff;
  margin-bottom: 10px;
  padding: 15px;
  :hover {
    box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-right: ${({ end }) => !end && "2px solid #edeff3"};
  padding: ${({ end }) => end && "15px"}; ;
`;
export const Info = styled.div`
  display: flex;
`;
Info.Top = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 70px;
  border-bottom: 2px solid #edeff3;
  @media (max-width: 1600px) {
    height: 100px;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`;
Info.OrderID = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
  max-width: fit-content;
  height: 46px;
  background: #20d472;
  border-radius: 18px;
  font-family: SFProDisplay;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.466667px;
  color: #ffffff;
  cursor: pointer;
  margin-right: 25px;
  @media (max-width: 1600px) {
    width: 80px;
    height: 36px;
    margin-right: 10px;
  }
`;
export const SaveWrapper = styled.div`
  width: 46px;
  height: 46px;
  background: #edeff3;
  border-radius: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media (max-width: 1600px) {
    width: 40px;
    height: 40px;
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
export const Time = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
`;
export const ClockWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const Clock = styled.img`
  width: 34px;
  height: 34px;
  margin-right: 5px;
  @media (max-width: 1900px) {
    width: 30px;
    height: 30px;
  }
  @media (max-width: 1600px) {
    width: 20px;
    height: 20px;
  }
`;
Info.Text = styled.div`
  font-family: SFProDisplay;
  font-size: 28px;
  line-height: 16px;
  color: #2d3a45;
  @media (max-width: 1600px) {
    font-size: 20px;
  }
`;
Info.Name = styled.div`
  font-family: SFProDisplay;
  font-weight: 700;
  font-size: 28px;
  line-height: 20px;
  letter-spacing: 0.533333px;
  color: #2d3a45;
  @media (max-width: 1700px) {
    font-size: 23px;
  }
  @media (max-width: 1500px) {
    font-size: 20px;
  }
`;
Info.Number = styled.div`
  font-family: SFProDisplay;
  font-size: 25px;
  line-height: 18px;
  letter-spacing: 0.4px;
  color: #2d3a45;
  mix-blend-mode: normal;
  opacity: 0.7;
  margin: 5px 0 20px 0;
  @media (max-width: 1700px) {
    font-size: 20px;
  }
  @media (max-width: 1500px) {
    font-size: 16px;
  }
`;
export const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  padding: 15px;
  height: 100%;
`;
UserCard.User = styled(user)`
  width: 24px;
  height: 24px;
  margin-right: 15px;
  @media (max-width: 1700px) {
    width: 20px;
    height: 20px;
  }
  @media (max-width: 1500px) {
    width: 18px;
    height: 18px;
  }
`;
UserCard.Phone = styled(phone)`
  width: 24px;
  height: 24px;
  margin-right: 15px;
  @media (max-width: 1700px) {
    width: 20px;
    height: 20px;
  }
  @media (max-width: 1500px) {
    width: 18px;
    height: 18px;
  }
`;
UserCard.Notepad = styled(notepad)`
  width: 24px;
  height: 24px;
  margin-right: 15px;
  @media (max-width: 1700px) {
    width: 20px;
    height: 20px;
  }
  @media (max-width: 1500px) {
    width: 18px;
    height: 18px;
  }
`;
UserCard.Car = styled(car)`
  width: 24px;
  height: 24px;
  margin-right: 15px;
  @media (max-width: 1700px) {
    width: 20px;
    height: 20px;
  }
  @media (max-width: 1500px) {
    width: 18px;
    height: 18px;
  }
`;
UserCard.Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: space-between;
`;
// Wrapper 3
export const WrapperInSide = styled.div`
  display: flex;
  padding: 15px;
  flex-direction: column;
`;
WrapperInSide.Top = styled.div`
  display: flex;
  justify-content: ${({ space }) => space && "space-between"};
`;
WrapperInSide.Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ space }) => space && "space-around"};
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

export const Meghts = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: -20px;
`;
