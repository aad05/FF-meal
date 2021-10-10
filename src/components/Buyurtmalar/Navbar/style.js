import styled from "styled-components";
import { ReactComponent as plus } from "../../../assets/icon/plus.svg";
import { ReactComponent as menuV } from "../../../assets/icon/menuH.svg";
import { ReactComponent as menuH } from "../../../assets/icon/menuV.svg";

const getOrder = ({ order }) => {
  switch (order) {
    case "first":
      return 1;
    case "second":
      return 3;
    case "third":
      return 1;
    default:
      return 1;
  }
};
export const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  @media (max-width: 1900px) {
    flex-direction: column;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  height: 80px;
  padding: 22px 40px;
  align-items: center;
  background: white;
  width: ${({ align }) => (align ? "300px" : "100%")};
  border: 1px solid #e5e5e5;
  @media (max-width: 1900px) {
    order: ${getOrder};
    width: 100%;
    display: ${({ order }) => order === "third" && "none"};
  }
`;
export const Plus = styled(plus)`
  padding: 11px;
  background: #20d472;
  min-width: 36px;
  min-height: 36px;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 14px;
`;
export const Title = styled.div`
  font-family: SFProDisplay bold;
  font-size: 12px;
  line-height: 16px;
  color: #2d3a45;
`;
export const Tab = styled.div`
  width: 100%;
  display: flex;
  border-radius: 24px;
  background-color: #edeff3;
  height: 54px;
  padding: 6px;
  justify-content: space-around;
  align-items: center;
  opacity: ${({ active }) => !active && 0.4};
`;
Tab.Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: SFProDisplay;
  font-size: 14px;
  line-height: 16px;
  color: #9c9fa2;
  width: 170px;
  cursor: pointer;
  border-radius: 18px;
  background-color: ${({ active }) => active && "#fff"};
  color: ${({ active }) => active && "#2d3a45"};
  height: 36px;
  transition: all 0.5s;
  @media (max-width: 1050px) {
    width: 150px;
  }
  @media (max-width: 1000px) {
    width: 110px;
  }
  @media (max-width: 900px) {
    width: 100px;
  }
  @media (max-width: 800px) {
    width: 90px;
  }
`;

export const Toggle = styled.div`
  display: flex;
  width: 150px;
  height: 54px;
  padding: 6px;
  background: #edeff3;
  border-radius: 24px;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 1000px) {
    width: 120px;
    height: 40px;
  }
`;
export const ToggleClone = styled(Toggle)`
  display: none;
  @media (max-width: 1900px) {
    display: flex;
    margin-left: auto;
  }
`;
export const MenuH = styled(menuV)`
  width: 14px;
  height: 14px;
  & rect {
    stroke: ${({ active }) => active && "#8d9ba8"};
    fill: ${({ active }) => active && "#8d9ba8"};
  }
  @media (max-width: 1000px) {
    width: 12px;
    height: 12px;
  }
`;
export const MenuV = styled(menuH)`
  width: 14px;
  height: 14px;
  & rect {
    stroke: ${({ active }) => active && "#8d9ba8"};
    fill: ${({ active }) => active && "#8d9ba8"};
  }
  @media (max-width: 1000px) {
    width: 12px;
    height: 12px;
  }
`;
export const IconsWrapper = styled.div`
  padding: 11px;
  background: ${({ active }) => (active ? "#fff" : "transparent")};
  width: 46px;
  height: 46px;
  min-width: 46px;
  min-height: 46px;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  @media (max-width: 1000px) {
    width: 38px;
    min-width: 38px;
    height: 38px;
    min-height: 38px;
    padding: 5px;
  }
`;
