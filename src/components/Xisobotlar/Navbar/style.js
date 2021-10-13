import styled from "styled-components";
import { ReactComponent as plus } from "../../../assets/icon/plus.svg";
// import { ReactComponent as menuV } from "../../../assets/icon/menuH.svg";
// import { ReactComponent as menuH } from "../../../assets/icon/menuV.svg";
import { ReactComponent as search } from "../../../assets/icon/search.svg";
import { ReactComponent as filter } from "../../../assets/icon/filter.svg";
import { ReactComponent as stats } from "../../../assets/icon/stats.svg";
import { ReactComponent as download } from "../../../assets/icon/download.svg";

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
export const Tab = styled.input`
  position: relative;
  width: 400px;
  display: flex;
  border-radius: 24px;
  background-color: #edeff3;
  height: 54px;
  padding: 17px 22px;
  justify-content: space-between;
  align-items: center;
  outline: none;
  border: none;
  font-size: 18px;
`;

export const SearchIcon = styled(search)`
  position: absolute;
  top: 40%;
  left: 39%;
`;

export const FilterDiv = styled.div`
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 50%;
  border: 6px solid #edeff3;
  margin-left: 20px;
  cursor: pointer;
`;

export const Filter = styled(filter)`
  width: 19px;
  height: 17px;
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
export const Stats = styled(download)`
  width: 18px;
  height: 18px;
  & rect {
    stroke: ${({ active }) => active && "#8d9ba8"};
    fill: ${({ active }) => active && "#8d9ba8"};
  }
  @media (max-width: 1000px) {
    width: 15px;
    height: 15px;
  }
`;
export const Download = styled(stats)`
  width: 18px;
  height: 18px;
  & rect {
    stroke: ${({ active }) => active && "#8d9ba8"};
    fill: ${({ active }) => active && "#8d9ba8"};
  }
  @media (max-width: 1000px) {
    width: 15px;
    height: 15px;
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
