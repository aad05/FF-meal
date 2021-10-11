import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 95%;
  height: 80px;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  background-color: grey;
  opacity: 0.3;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 6px;
  font-weight: 900;
  transition: all 0.3s;
  :hover {
    opacity: 0.5;
  }
`;
export const Title = styled.div`
  font-size: 30px;
  line-height: 18px;
  color: black;
`;
