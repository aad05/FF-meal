import styled from "styled-components";

export const Progresss = styled.div`
  background-color: #f9fafb;
  border-radius: 20px;
  position: relative;
  margin: 15px 0;
  width: 200px;
  height: 6px;
`;
export const Done = styled.div`
  background: linear-gradient(to left, #64edf4, #64edf4);
  border-radius: 20px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 0;
  opacity: 0;
  transition: 1s ease 0.3s;
`;
