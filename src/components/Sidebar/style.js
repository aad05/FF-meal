import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  height: 100vh;
  padding: 20px 0 40px 0;
  background: #fff;
  position: sticky;
  top: 0;
`;
export const LogoWrapper = styled.div`
  margin-bottom: 70px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  height: 100px;
`;
LogoWrapper.Img = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-right: 20px;
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
`;
Text.Title = styled.div`
  font-family: SFProDisplay;
  font-size: 18px;
  line-height: 19px;
  color: #2d3a45;
  font-weight: 900;
  font-family: SFProDisplay bold;
  margin-bottom: 5px;
`;
Text.Desc = styled.div`
  font-family: SFProDisplay;
  font-size: 14px;
  line-height: 14px;
  color: #2d3a45;
  mix-blend-mode: normal;
  opacity: 0.5;
`;
export const Wrapper = styled.div`
  display: flex;

  align-items: ${({ chiqish }) => chiqish && "center"};
  margin-top: ${({ chiqish }) => chiqish && "auto"};
  cursor: ${({ chiqish }) => chiqish && "pointer"};
  flex-direction: ${({ chiqish }) => (chiqish ? "row" : "column")};
`;
export const Item = styled.div`
  margin: 0 24px 10px 0;
  height: 48px;
  display: flex;
  align-items: center;
`;
export const Link = styled(NavLink)`
  width: 100%;
  font-family: SFProDisplay;
  font-size: 14px;
  line-height: 18px;
  color: #2d3a45;
  text-decoration: none;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  .icon {
    margin-right: 20px;
    width: 36px;
    height: 36px;
    padding: 10px;
    background: #f6f6f6;
    border-radius: 5px;
    margin-left: 40px;
  }
  transition: all 0.3s;
`;
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 36px;
  height: 36px;
  padding: 10px;
  background: #f6f6f6;
  border-radius: 5px;
  margin: 0 10px 0 40px;
`;
IconWrapper.Title = styled.div`
  font-family: SFProDisplay;
  font-size: 16px;
  line-height: 19px;
  color: #2d3a45;
  text-transform: uppercase;
`;
export const activeStyle = {
  color: "white",
  background: "#FCB600",
  padding: "6px 0",
  borderRadius: " 0 6px 6px 0",
};
