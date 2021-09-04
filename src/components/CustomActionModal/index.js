import React from "react";
import Modal from "react-modal";
import "../Modal/style.css";
import { FlexLayout } from "../styles";

export const CustomActionModal = ({
  visible,
  setVisible,
  title,
  children,
  subTitle,
  icon,
}) => {
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
        <div style={{ display: "flex" }}>
          <div
            style={{
              fontSize: "18px",
              color: "#202945",
              fontWeight: "700",
              margin: "0 1rem",
            }}
          >
            {title}
          </div>
          <span>{">"}</span>
          <div
            style={{
              fontSize: "14px",
              color: "#202945",
              fontWeight: "700",
              margin: "0 1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={icon} alt="" style={{ margin: "0rem 0.5rem" }} />
            {subTitle}
          </div>
        </div>
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
