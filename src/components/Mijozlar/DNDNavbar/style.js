import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  background-color: #fff;
`;
export const Wrapper = styled.ul`
  flex: 1;
  padding: 20px 20px;
  padding-left: ${({ left }) => left && "70px"};
  border-right: 1px solid #e5e5e5;
`;
export const Title = styled.li`
  font-family: SFProDisplay bold;
  list-style: none;
  font-size: 11px;
  line-height: 13px;
  text-transform: uppercase;
  color: #2d3a45;
`;
