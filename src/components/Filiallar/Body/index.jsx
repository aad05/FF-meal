import React from "react";
import DNDNavbar from "../DNDNavbar";
import DND from "../DND";
export const Body = ({ showModal, onModalCancel }) => {
  return (
    <div style={{ marginBottom: "30px" }}>
      <DNDNavbar />
      <DND showModal={showModal} onModalCancel={onModalCancel} />
    </div>
  );
};
export default Body;
