import styled from "styled-components";
import { ReactComponent as shape } from "../../../assets/icon/shape.svg";
import { ReactComponent as charts } from "../../../assets/icon/chart.svg";
import { ReactComponent as cards } from "../../../assets/icon/cards.svg";
import { ReactComponent as search } from "../../../assets/icon/search.svg";

export const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
`;
export const Wrapper = styled.div`
  display: flex;
  height: 80px;
  padding: 22px 40px;
  align-items: center;
  background: white;
  width: ${({ align }) => (align ? "250px" : "100%")};
  border: 1px solid #e5e5e5;
`;
export const Plus = styled(shape)`
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

export const MenuH = styled(cards)`
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
export const MenuV = styled(charts)`
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
export const InputWrapper = styled.div`
  position: relative;
  margin-right: 30px;
`;
export const Search = styled.input`
  width: 400px;
  height: 48px;
  background: #edeff3;
  border-radius: 24px;
  outline: none;
  padding-left: 25px;
  border: none;
  font-size: 15px;
  ::placeholder {
    font-size: 15px;
  }
`;
export const SearchIcon = styled(search)`
  position: absolute;
  width: 25px;
  height: 25px;
  top: 10px;
  right: 20px;
  cursor: pointer;
`;
