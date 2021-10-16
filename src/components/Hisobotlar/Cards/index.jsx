import React from "react";
import DND from "../DND";
import DNDnavbar from "../DNDNavbar";
export const Cards = ({ refresh }) => {
  return (
    <div>
      <DNDnavbar /> <DND refresh={refresh} />
    </div>
  );
};
export default Cards;
