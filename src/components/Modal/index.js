import React from "react";
import Modal from "react-modal";
import "./style.css";
import { FlexLayout, Text } from "../styles";

export const CustomModal = ({ visible, setVisible, title, children }) => {
  return (
    <Modal
      isOpen={visible}
      onRequestClose={setVisible}
      contentLabel="My dialog"
      className="mymodal"
      overlayClassName="myoverlay"
      closeTimeoutMS={500}
      ariaHideApp={false}
    >
      <FlexLayout
        width="404px"
        align="flex-start"
        borderBottom="1px solid"
        borderBottomColor="rgb(0,0,0)"
        borderstyle="solid"
        direction="column"
      >
        <Text fontSize="18px" color="#202945" fontWieght="400">
          {title}
        </Text>
        <hr
          style={{
            color: "#BAC2C7",
            width: "100%",
            marginTop: "10px",
            height: "1px",
          }}
        />
        {children}
      </FlexLayout>
    </Modal>
  );
};
