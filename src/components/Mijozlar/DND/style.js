import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  justify-content: center;
`;
export const Wrapper = styled.div`
  width: 95%;
  margin: 0 30px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  margin-top: 10px;
  justify-content: center;
  cursor: pointer;
  :hover {
    box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
  }
`;
export const Dates = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding: 10px 50px;
  flex: 1;
  align-items: center;
`;
export const Title = styled.div`
  font-family: SFProDisplay;
  font-size: 13px;
  line-height: 15px;
  color: #2d3a45;
  padding-left: ${({ left }) => left && "20px"};
`;
export const Status = styled.div`
  font-family: SFProDisplay;
  font-size: 13px;
  line-height: 15px;
  color: ${({ green }) => (green ? "green" : " red")};
  padding-left: ${({ left }) => left && "20px"};
`;
export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
export const Action = styled.div`
  display: flex;
`;
export const ImageText = styled.div`
  display: flex;
  align-items: center;
`;
export const ButtonAll = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;
export const RestoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Restore = styled.div`
  width: 100%;
  height: 100%;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #fcb600;
`;
export const RestoreIcon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;
export const RestoreButton = styled.div`
  position: relative;
  margin: 0;
  height: 70px;
  width: 100%;
  outline: none;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  background-color: #ffffff;
  border-radius: 10px;
  color: #1d89ff;
  font-weight: 400;
  font-size: 20px;
  font-family: inherit;
  z-index: 0;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
  span {
    color: #fff;
    font-size: 30px;
    font-weight: 500;
    letter-spacing: 0.7px;
  }
  &:hover {
    animation: rotate 0.7s ease-in-out both;
    span {
      animation: storm 0.7s ease-in-out both;
      animation-delay: 0.06s;
    }
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
    25% {
      transform: rotate(3deg) translate3d(0, 0, 0);
    }
    50% {
      transform: rotate(-3deg) translate3d(0, 0, 0);
    }
    75% {
      transform: rotate(1deg) translate3d(0, 0, 0);
    }
    100% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
  }
  @keyframes storm {
    0% {
      transform: translate3d(0, 0, 0) translateZ(0);
    }
    25% {
      transform: translate3d(4px, 0, 0) translateZ(0);
    }
    50% {
      transform: translate3d(-3px, 0, 0) translateZ(0);
    }
    75% {
      transform: translate3d(2px, 0, 0) translateZ(0);
    }
    100% {
      transform: translate3d(0, 0, 0) translateZ(0);
    }
  }
  .btn-pill {
    &:before,
    &:after {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: #1d89ff;
      content: "";
      opacity: 0;
      transition: transform 0.15s cubic-bezier(0.02, 0.01, 0.47, 1),
        opacity 0.15s cubic-bezier(0.02, 0.01, 0.47, 1);
      z-index: -1;
      transform: translate(100%, -25%) translate3d(0, 0, 0);
    }
    &:hover {
      &:before,
      &:after {
        opacity: 0.15;
        transition: transform 0.2s cubic-bezier(0.02, 0.01, 0.47, 1),
          opacity 0.2s cubic-bezier(0.02, 0.01, 0.47, 1);
      }
      &:before {
        transform: translate3d(50%, 0, 0) scale(0.9);
      }
      &:after {
        transform: translate(50%, 0) scale(1.1);
      }
    }
  }
`;
export const Input = styled.input`
  outline: none;
  font-size: 15px;
  width: 80%;
  height: 30px;
  border-radius: 24px;
  border: 1px solid #fcb600;
  padding-left: 15px;
`;
