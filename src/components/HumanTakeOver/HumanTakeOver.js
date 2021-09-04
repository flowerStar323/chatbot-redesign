import React from "react";
import { SelectLayout } from "../../pages/agents/style";
import DropdownMenu from "../DropdownMenu";
import downArrow from "../../assets/img/svgs/4-Create bot Action b/arrow-drop-down-line.svg";
import { StyledButton } from "../Button";

export default function HumanTakeOver({ handleClose }) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ alignSelf: "flex-start" }} className="my-1">
        Assign To
      </div>
      <DropdownMenu
        list={[
          {
            id: "addpath",
            label: "@AgentName",
          },
        ]}
        click={(e) => {
          console.log(e);
        }}
        left="-10px"
      >
        <SelectLayout>
          <StyledButton
            style={{
              background: "white",
              border: "1px solid #BAC2C7",
              color: "#BAC2C7",
              fontSize: "0.9rem",
              display: "flex",
              justifyContent: "space-between",
              //   alignItems: "space-between",
              width: "100%",
              textAlign: "left",
            }}
          >
            Choose Agent Name <img src={downArrow} alt="" />
          </StyledButton>
        </SelectLayout>
      </DropdownMenu>
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
