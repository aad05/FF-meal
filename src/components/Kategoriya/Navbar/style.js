import styled from "styled-components";
import { ReactComponent as plus } from "../../../assets/icon/plus.svg";
import { ReactComponent as search } from "../../../assets/icon/search.svg";
export const Container = styled.div`
  width: 100%;
  display: flex;
`;
export const Wrapper = styled.div`
  width: ${({ width }) => (width ? "300px" : "100%")};
  display: flex;
  height: 80px;
  padding: 22px 40px;
  align-items: center;
  background: white;
  border: 1px solid #e5e5e5;
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
