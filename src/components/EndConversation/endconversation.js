import React from "react";
import BotMessageBox from "../BotMessageBox/BotMessageBox";
import { StyledButton } from "../Button";

export default function Endconversation({ handleClose }) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",s
      }}
    >
      <div style={{ alignSelf: "flex-start" }}>Add goodbye message</div>
      <div style={{ width: "100%" }}>
        <BotMessageBox b2text="Upload" />
      </div>
      <div
        style={{
          width: "50%",
          display: "flex",
          margin: "1rem",
          justifyContent: "space-around",
        }}
      >
        <StyledButton
          variant="grey"
          className="px-2"
          style={{ fontSize: "0.7rem", width: "40%" }}
        >
          Save
        </StyledButton>
        <StyledButton
          variant="pink"
          style={{
            fontSize: "0.7rem",
            width: "40%",
          }}
          className="px-2"
          onClick={handleClose}
        >
          Cancel
        </StyledButton>
      </div>
    </div>
  );
}
