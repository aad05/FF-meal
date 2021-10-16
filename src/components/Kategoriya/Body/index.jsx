import React from "react";
import KANavbar from "../KANavbar";
import DND from "../DND";
export const Body = ({ showModal, onModalCancel }) => {
  return (
    <div>
      <KANavbar />
      <DND showModal={showModal} onModalCancel={onModalCancel} />
    </div>
  );
};
export default Body;
