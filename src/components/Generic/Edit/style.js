import styled from "styled-components";
import { ReactComponent as edit } from "../../../assets/icon/edit.svg";

export const Container = styled.div`
  min-height: 50px;
  min-width: 50px;
  background: #edeff3;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const IconEdit = styled(edit)`
  width: 40px;
  height: 40px;
  padding: 10px;
  margin: 5px;
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
  border-radius: 20px;
`;
